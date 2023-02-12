import { Formik, Field } from "formik";
import Image from "next/image";
import axios from 'axios';

const Verification = ({ userDetail, setStep }) => {


  return (
    <div className="registration-box">
      <div className="flex-box d-column gap-x-sm">
        <h6 className="p-lg center-text ">Step 1 of 3</h6>
        <h3 className="p-xl center-text">Sign up to Hemergy</h3>
      </div>
      <Formik
        initialValues={{ name: "", surname: "", birthDate: "", country: "", address: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.surname) {
            errors.surname = "Required";
          }
          if (!values.birthDate) {
            errors.birthDate = "Required";
          }
          if (!values.country) {
            errors.country = "Required";
          }
          if (!values.address) {
            errors.address = "Required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const updateUser = await axios.put(
              `http://localhost:4000/api/user/updateuser`,
              { ...values, email: userDetail?.email  }
            );
            setSubmitting(false)
            console.log(updateUser)
            if (updateUser?.data?.userFound) {
              setStep(2)
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
            <div className="flex-col flex-box gap-sm sm:flex-row">
              <div className="input-box">
                <label className="p-sm text-weight-medium">First name</label>
                <div className="input-field">
                  <input
                    className="input p-sm"
                    placeholder="Name"
                    type="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
                <p className="error p-x-sm"> {errors.name && touched.name && errors.name}</p>
              </div>

              <div className="input-box">
                <label className="p-sm text-weight-medium">Last name</label>
                <div className="input-field">
                  <input
                    className="input p-sm"
                    placeholder="Surname"
                    type="surname"
                    name="surname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                  />
                </div>
                <p className="error p-x-sm">
                  {errors.surname && touched.surname && errors.surname}
                </p>
              </div>
            </div>

            <div className="input-box">
              <label className="p-sm text-weight-medium">Birth date</label>
              <div className="input-field">
                <input
                  className="input p-sm"
                  placeholder=""
                  type="date"
                  name="birthDate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.birthDate}
                />
              </div>
              <p className="error p-x-sm">
                {errors.birthDate && touched.birthDate && errors.birthDate}
              </p>
            </div>
            <div className="input-box">
              <label className="p-sm text-weight-medium">Country</label>
              <div className="input-field">
                <img src="/images/country.svg" width="20px" height="20px" alt="country" />
                <Field
                  className="input p-sm"
                  as="select"
                  name="country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                >
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Field>
              </div>
              <p className="error p-x-sm">{errors.country && touched.country && errors.country}</p>
            </div>

            <div className="input-box">
              <label className="p-sm text-weight-medium">Address finder</label>
              <div className="input-field">
                <Image src="/images/search.svg" alt="google" width={20} height={20} />
                <input
                  className="input p-sm"
                  placeholder="Start typing the address"
                  type="address"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
              </div>
              <p className="error p-x-sm">{errors.address && touched.address && errors.address}</p>
            </div>

            <p className="p-sm text-weight-medium text-textcolor">Enter address manually</p>

            <button className="btn secondary blue" type="submit" disabled={isSubmitting}>
              {isSubmitting ? '.....' : 'Next'}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Verification;
