import RegisterSlider from "@/components/Authentications/registerSlider";
import LogIn from "@/components/Authentications/login";
import Image from "next/image";

const Register = () => {
  return (
    <div className="authentications-section">
      <div className="auth-header">
        <Image src="/images/hemergy-logo.svg" width={150} height={32} alt="logo" />
      </div>

      <div className="auth-container">
        <RegisterSlider />
        <LogIn />
      </div>

      <div className="auth-wather" />
    </div>
  );
};

export default Register;
