import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";

export default function useLoginForm(props?: {
  onDone?: Function | undefined;
}) {
  const { onDone = () => ({}) } = props || {};
  const { login } = useAuth()!;
  const [error, setError] = React.useState<string | null>(null);

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid email address"),
    password: Yup.string().required("Required"),
  });

  async function onSubmit(values: {
    email: string;
    password: string;
  }) {
    try {
      await login(values.email, values.password);
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

  return { ...formik, error };
}
