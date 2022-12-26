import CropImageField from "./base/CropImageField";
import useRegisterForm from "../hooks/useRegisterForm";
import { ErrorMessage, Form, FormikProvider } from "formik";
import { styles } from "../classes";

export default function Register() {
  const form = useRegisterForm();

  return (
    <FormikProvider value={form}>
      <Form>
        <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
          {form.error && (
            <div className="w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2">
              {form.error}
            </div>
          )}

          <div className="w-40 h-40 rounded-full overflow-hidden">
            <CropImageField
              onFileChange={(file: any) => form.setFile(file)}
              aspectRatio={1 / 1}
              defaultImage=""
            />
          </div>
          
          <input
            type="text"
            {...form.getFieldProps("name")}
            placeholder="Name"
            className={styles.field}
          />
          <ErrorMessage component="p" className={styles.errorMsg} name="name" />
          <input
            type="text"
            {...form.getFieldProps("email")}
            placeholder="Email Address"
            className={styles.field}
          />
          <ErrorMessage component="p" className={styles.errorMsg} name="email" />

          <input
            {...form.getFieldProps("password")}
            type="password"
            placeholder="Password"
            className={styles.field}
          />
          <ErrorMessage component="p" className={styles.errorMsg} name="password" />
          <button
            onClick={form.submitForm}
            className="w-full max-w-[40ch] bg-green border border-solid py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-blue after:z-[1] after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900 text-white font-bold"
          >
            <h2 className="relative z-10">Submit</h2>
          </button>
        </div>
      </Form>
    </FormikProvider>
  );
}
