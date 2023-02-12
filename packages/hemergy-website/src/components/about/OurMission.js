import Link from 'next/link';
import React from 'react';

const OurMission = () => {
  return (
    <section className="w-full h-auto pt-[50px] ">
      <div className="max-w-[1440px] mx-auto font-Poppins flex items-center flex-col">
        <div className="w-[442px] text-center">
          <h2 className="font-semibold text-[48px] leading-[62px]  m-0 text-textcolor">
            Our mission
          </h2>
          <p className=" mt-4 font-normal text-xl   m-0 text-textcolor">
            We accelerate the energy transition in harmony with nature.
          </p>
          <p className="mt-4 font-normal text-xl   m-0 text-textcolor">
            We open a direct and seamless access to environmental and renewable
            energy assets that handle a fair structure of costs, both social and
            economic.
          </p>
          <p className="mt-4 font-normal text-xl   m-0 text-textcolor">
            These assets can be traded simply and instantly, across the
            communities to create a global engagement towards a low carbon
            future.
          </p>
          <p className="mt-4 font-normal text-xl   m-0 text-textcolor">
            Based on a customized low carbon blockchains, we provide compliant
            solutions that put trust, transparency and efficiency at the heart
            of our solutions.
          </p>
        </div>
        <div className="mt-12">
          <Link href="" className="btn Primary">
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
