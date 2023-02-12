import { Formik, Field } from "formik";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import ConnectWallet from '@/components/connectWallet';
import { useState } from "react";

const InvestorProfile = ({ setStep, userDetail }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  return (
    <div className="registration-box">
      <div className="flex-box d-column gap-x-sm">
        <h6 className="p-lg center-text ">Step 2 of 3</h6>
        <h3 className="p-xl center-text">Investor profile</h3>
      </div>
      <Formik
        initialValues={{
          ['Are you an accredited investor?']: false,
          ['Are you familiar with cryptocurrencies?']: false,
          ['toggDo you have knowledge about finance / financial products?']: false
        }}
        validate={(values) => {
          const errors = {};

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {

          const result = Object.keys(values).map(data => {
            return ({
              question: data,
              selectedAnswers: values[data]
            })
          })
          console.log(result)
          try {
            const updateUser = await axios.put(
              `http://localhost:4000/api/user/questionair`,
              { questions: result, email: userDetail?.email  }
            );
            setSubmitting(false)

            if (updateUser?.data?.userFound) {
              if(values['Are you familiar with cryptocurrencies?']) {
                setStep(4)
              } else {
                setStep(3)
              }

            }

          } catch (error) {
            setSubmitting(false)
          }
          // setStep(3);
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
            <div className="form-cantainer" role="group" aria-labelledby="checkbox-group">
              <div className="flex-box gap-lg">
                <p className="p-sm text-weight-medium">Are you familiar with cryptocurrencies?</p>
                <label
                  for="Toggle4"
                  className="w-[76px] inline-flex items-center gap-1 rounded-2xl p-1 cursor-pointer bg-garbg text-garbg"
                >
                  <Field id="Toggle4" type="checkbox" name="Are you familiar with cryptocurrencies?" className="hidden peer" />
                  <span className="w-8 h-8  p-[6px] rounded-xl bg-garbg peer-checked:bg-btncolor">
                    <Image
                      src={values['Are you familiar with cryptocurrencies?'] === true ? "/images/check-w.svg" : "/images/check-b.svg"}
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className=" w-8 h-8  p-[6px] rounded-xl bg-btncolor peer-checked:bg-garbg">
                    <Image
                      src={values['Are you familiar with cryptocurrencies?'] === false ? "/images/close-w.svg" : "/images/close-b.svg"}
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </span>
                </label>
              </div>
              {/* {values['Are you familiar with cryptocurrencies?'] && <ConnectWallet
                setConnButtonText={setConnButtonText}

                setErrorMessage={setErrorMessage}
                setDefaultAccount={setDefaultAccount}
                setUserBalance={setUserBalance}
                errorMessage={errorMessage}
                connButtonText={connButtonText}
                userDetail={userDetail} />} */}


              <div className="flex-box gap-lg">
                <p className="p-sm text-weight-medium">Are you an accredited investor?</p>
                <label
                  for="Toggle5"
                  className="w-[76px] inline-flex items-center gap-1 rounded-2xl p-1 cursor-pointer bg-garbg text-garbg"
                >
                  <Field id="Toggle5" type="checkbox" name="Are you an accredited investor?" className="hidden peer" />
                  <span className="w-8 h-8  p-[6px] rounded-xl bg-garbg peer-checked:bg-btncolor">
                    <Image
                      src={values['Are you an accredited investor?'] === true ? "/images/check-w.svg" : "/images/check-b.svg"}
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className=" w-8 h-8  p-[6px] rounded-xl bg-btncolor peer-checked:bg-garbg">
                    <Image
                      src={values['Are you an accredited investor?'] === false ? "/images/close-w.svg" : "/images/close-b.svg"}
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </span>
                </label>
              </div>

              <div className="flex-box gap-lg">
                <p className="p-sm text-weight-medium">
                  Do you have knowledge about finance / financial products?
                </p>
                <label
                  for="Toggle6"
                  className="w-[76px] inline-flex items-center gap-1 rounded-2xl p-1 cursor-pointer bg-garbg text-garbg"
                >
                  <Field id="Toggle6" type="checkbox" name="Do you have knowledge about finance / financial products?" className="hidden peer" />
                  <span className="w-8 h-8  p-[6px] rounded-xl bg-garbg peer-checked:bg-btncolor">
                    <Image
                      src={values['Do you have knowledge about finance / financial products?'] === true ? "/images/check-w.svg" : "/images/check-b.svg"}
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className=" w-8 h-8  p-[6px] rounded-xl bg-btncolor peer-checked:bg-garbg">
                    <Image
                      src={values['Do you have knowledge about finance / financial products?'] === false ? "/images/close-w.svg" : "/images/close-b.svg"}
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </span>
                </label>
              </div>
            </div>

            <div className="items-start flex-box d-column gap-x-sm">
              <h6 className="p-sm text-weight-medium ">Why are we asking?</h6>
              <h3 className="p-sm ">
                There are different investment rules associated with accredited investors and
                individuals who are familiar with financial products.{" "}
                <span className="text-textcolor">Find out more</span>
              </h3>
            </div>

            <div className="gap-4 flex-box">
              <button
                onClick={() => setStep(1)}
                type="button"
                className="justify-center flex-box gap-x-sm btn-border secondary"
              >
                Back
              </button>
              <button className="btn secondary blue" type="submit" disabled={isSubmitting}>
                {isSubmitting ? '.....' : 'Next'}
              </button>
            </div>

            <Link href="" className="font-medium text-center p-sm text-textcolor">
              Skip for now
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default InvestorProfile;
