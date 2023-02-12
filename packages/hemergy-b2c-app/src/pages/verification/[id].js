import { useEffect, useState } from "react";
import axios from 'axios';
import {  toast } from 'react-toastify';
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux'


import RegisterSlider from "@/components/Authentications/registerSlider";
import VerificationBox from "@/components/Authentications/verification";
import InvestorProfile from "@/components/Authentications/investorProfile";
import Financials from "@/components/Authentications/financials";
import WalletOption from "@/components/Authentications/walletOption";
import EmailVerify from "@/components/Authentications/emailVerify";

import {addUser} from "@/store/reducer/user";

const Verification = ({ params }) => {
  const [step, setStep] = useState(1);
  const [loader, setLoading] = useState(true)
  const [userDetail, setUserDetail] = useState()
  const dispatch =  useDispatch()

  useEffect(() => {

   (async()=>{
    try {
     setLoading(true);

      if (params?.id) {
        toast('Verifying', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        let response = await axios.post(
          `http://localhost:4000/api/auth/verify/account`,
          {
            code:params?.id
          }
        );
        setUserDetail(response?.data?.user)
        dispatch(addUser(response?.data?.user))
        if (response?.data?.user?.platform === "custom") {
          setLoading(false);
          router.push("/account");
        } else {
          setLoading(false);
          toast.dismiss()
          //dispatch(verifyYourAccount(response?.data, router, redirectVal));
        }
      }
    } catch (error) {
    //  setLoading(false);
      toast.dismiss()
      // dispatch(
      //   setAlert({ message: error?.message, type: "error", time: 1000 })
      // );
      // dispatch(
      //   setAlert({
      //     message: error?.response?.data?.status,
      //     type: "error",
      //     time: 1000,
      //   })
      // );
      console.log(error);
    }


   })()


  }, [])
  return (
    <div className="authentications-section">
      <div className="auth-header">
        <Image src="/images/hemergy-logo.svg" width={150} height={32} alt="logo" />
      </div>

     {!loader && <div className="auth-container">
        <RegisterSlider />
        {step === 1 && <VerificationBox userDetail={userDetail} setStep={setStep} />}
        {step === 2 && <InvestorProfile userDetail={userDetail} setStep={setStep}  />}
        {step === 3 && <Financials userDetail={userDetail} setStep={setStep} />}
        {step===4 && <WalletOption userDetail={userDetail} setStep={setStep} /> }
      </div>}
      {/* <EmailVerify/> */}

      <div className="auth-wather" />
    </div>
  );
};

export default Verification;


export const getServerSideProps = (context) => {
  return {
    props: {
      params: context?.params,
    },
  };
};