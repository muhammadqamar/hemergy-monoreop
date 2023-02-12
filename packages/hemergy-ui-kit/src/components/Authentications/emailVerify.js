import { useState } from "react";
import Image from "next/image";


const EmailVerify = () => {

  return (
    <div className="registration-box">
      <div className="flex-box d-column gap-x-sm">

        <h3 className="p-xl center-text">Verifying Email Link</h3>

      </div>

      <div className="gap-4 flex-box">

        <button  className="btn secondary blue" type="submit" onClick={async () => {

        }} >
            <Image src="/images/three-dots.gif" width="20" height="10" alt="" />
          {'Done'}
        </button>
      </div>



    </div>
  );
};

export default EmailVerify;
