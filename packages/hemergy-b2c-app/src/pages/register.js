import Image from "next/image";
import RegisterSlider from "@/components/Authentications/registerSlider";
import SignUp from "@/components/Authentications/signUp";
import InBox from "@/components/Authentications/inBox";
import { useEffect, useState } from "react";


const Register = ({query}) => {
  const [registerState, setRegisterState] = useState(false);


  return (
    <div className="authentications-section">
      <div className="auth-header">
        <Image src="/images/hemergy-logo.svg" width={150} height={32} alt="logo" />
      </div>

      <div className="auth-container">
        <RegisterSlider />
        {query?.success || registerState ? (
          <InBox setRegisterState={setRegisterState} />
        ) : (
          <SignUp setRegisterState={setRegisterState} />
        )}
      </div>

      <div className="auth-wather" />
    </div>
  );
};

export default Register;

export const getServerSideProps = (context) => {
  return {
    props: {
      query: context?.query,
    },
  };
};