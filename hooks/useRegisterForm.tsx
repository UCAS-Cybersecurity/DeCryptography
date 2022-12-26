import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import useUploadHelpers from "./useUploadHelpers";

export default function useRegisterForm(props?: {
  onDone?: Function | undefined;
}) {
  const { onDone = () => ({}) } = props || {};
  const { signUp, updateUser } = useAuth()!;
  const uploadCtx = useUploadHelpers();
  const [file, setFile] = React.useState<File | undefined>();
  const [error, setError] = React.useState<string | null>(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid email address"),
    password: Yup.string().required("Required"),
  });

  async function onSubmit(values: {
    name: string;
    email: string;
    password: string;
  }) {
    try {
      const user = await signUp(values.email, values.password);
      const url = await uploadCtx.upload({
        label: "User Profile",
        file,
        path: `images/users/${user?.user?.uid}.png`,
      });
      await updateUser({
        displayName: values.name,
        photoURL: url,
      });
      return onDone();
    } catch (err: any) {
      console.log(err);
      setError(err?.message || "Something went wrong.");
      return null;
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  return { ...formik, error, file, setFile };
}
