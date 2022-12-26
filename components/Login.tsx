import { ErrorMessage, Form, FormikProvider } from "formik";
import { styles } from "../classes";
import useLoginForm from "../hooks/useLoginForm";

export default function Login() {
  const form = useLoginForm();

  return (
    <FormikProvider value={form}>
      <Form>
        <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
          {form.error && (
            <div className="w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2">
              {form.error}
            </div>
          )}

          <input
            type="text"
            {...form.getFieldProps("email")}
            placeholder="Email Address"
            className="outline-none duration-300 border-b-2 border-solid border-white focus:border-blue text-slate-900 p-2 w-full max-w-[40ch]"
          />
          <ErrorMessage
            component="p"
            className={styles.errorMsg}
            name="email"
          />

          <input
            {...form.getFieldProps("password")}
            type="password"
            placeholder="Password"
            className="outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-blue"
          />
          <ErrorMessage
            component="p"
            className={styles.errorMsg}
            name="password"
          />

          <button
            onClick={form.submitForm}
            className="w-full max-w-[40ch] bg-green border border-solid py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-blue after:z-[1] after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 text-white hover:text-slate-900"
          >
            <h2 className="relative z-5">Submit</h2>
          </button>
        </div>
      </Form>
    </FormikProvider>
  );
}
