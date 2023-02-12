import { Formik, Field } from "formik";
import Image from "next/image";
import axios from 'axios';
import {  toast } from 'react-toastify';
import { useRouter } from 'next/router'

const Financials = ({ setStep, userDetail }) => {
  const router = useRouter()
  return (
    <div className="registration-box">
      <div className="flex-box d-column gap-x-sm">
        <h6 className="p-lg center-text ">Step 3 of 3</h6>
        <h3 className="p-xl center-text">Financials</h3>
      </div>
      <Formik
        initialValues={{ annualTurnover: "", disposableIncome: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.annualTurnover) {
            errors.annualTurnover = "Required";
          }

          if (!values.disposableIncome) {
            errors.disposableIncome = "Required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const updateUser = await axios.put(
              `http://localhost:4000/api/user/financials`,
              { ...values, email: userDetail?.email || 'muhammadqamar111@gmail.com' }
            );
            setSubmitting(false)
            console.log(updateUser)
            if (updateUser?.data?.userFound) {
              router.push('/projects')
            }
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
              <label className="p-sm text-weight-medium">Annual turnover</label>

              <div className="input-field">
                <p className="p-sm">€</p>
                <input
                  className="input p-sm"
                  placeholder="0.00"
                  type="text"
                  name="annualTurnover"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.annualTurnover}
                />
              </div>
              <p className=" p-x-sm text-[#6B6D88]">
                How much income do you have after monthly expenses
              </p>
              <p className="error p-x-sm">
                {errors.annualTurnover && touched.annualTurnover && errors.annualTurnover}
              </p>
            </div>

            <div className="input-box">
              <label className="p-sm text-weight-medium">Disposable income</label>
              <div className="input-field">
                <p className="p-sm">€</p>
                <input
                  className="input p-sm"
                  placeholder="0.00"
                  type="text"
                  name="disposableIncome"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.disposableIncome}
                />
                <p className="flex-shrink-0 p-sm">/ m</p>
              </div>
              <p className=" p-x-sm text-[#6B6D88]">
                How much income do you have after monthly expenses
              </p>
              <p className="error p-x-sm">
                {errors.disposableIncome && touched.disposableIncome && errors.disposableIncome}
              </p>
            </div>

            <div className="gap-4 flex-box">
              <button
                onClick={() => setStep(2)}
                type="button"
                className="justify-center flex-box gap-x-sm btn-border secondary"
              >
                Back
              </button>
              <button className="btn secondary blue" type="submit" disabled={isSubmitting}>
              {isSubmitting ? '.....' : 'Done'}
              </button>
            </div>

            <p className="font-medium text-center p-sm text-textcolor">Skip for now</p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Financials;
