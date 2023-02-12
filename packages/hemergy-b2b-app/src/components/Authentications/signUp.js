import { Formik, Field } from "formik";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';

const SignUp = ({ setRegisterState }) => {
  return (
    <div className="registration-box">
      <h3 className="p-xl center-text">Sign up to Hemergy</h3>
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={async(values, { setSubmitting }) => {
          try {
            const register = await axios.post(
              `http://localhost:4000/api/auth/register`,
              values
            );
            setSubmitting(false)
            if(register?.data?.success) {
              setRegisterState(true)
            }

            // if (updateUser?.data?.userFound) {
            //   setStep(3)
            // }
          } catch (error) {
            setSubmitting(false)
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="form-cantainer" onSubmit={handleSubmit}>
            <div className="input-box">
              <label className="p-sm text-weight-medium">Email</label>
              <div className="input-field">
                <input
                  placeholder="Emain"
                  className="input p-sm"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <p className="error p-x-sm"> {errors.email && touched.email && errors.email}</p>
            </div>

            <div className="flex-box">
              <div role="group" aria-labelledby="checkbox-group">
                <label className="flex-box gap-x-sm ">
                  <Field className="checkbox" type="checkbox" name="checked" value="Remember me" />
                  <p className="p-sm">Remember me</p>
                </label>
              </div>
              <Link href="" className="p-sm text-weight-medium p-link">
                Forgot password?
              </Link>
            </div>

            <button className="btn secondary blue" type="submit" disabled={isSubmitting}>
            {isSubmitting ? '.....' : 'Sign up'}
            </button>

            <div className="flex-box gap-x-sm">
              <div className="divider" />
              <p className="p-sm">or</p>
              <div className="divider" />
            </div>

            <button type="button" className="flex-box fit-width gap-x-sm btn-border secondary" onClick={()=>window.location = `http://localhost:4000/api/auth/google-login`}>
              <Image src="/images/Google.svg" alt="google" width={20} height={20} />
              Sign up with Google
            </button>

            <p className=" center-text p-sm" style={{ marginBottom: "24px" }}>
              Already a member?&nbsp;
              <Link href="/login" className="text-weight-medium text-textcolor">
                Sign in
              </Link>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
