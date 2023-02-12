import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
  return (
    <div className="hero-container-about">
      <div className="hero-wrapper-about">
        <div className="">
          <h1 className="main-heading ">
            About
            <br /> Hemergy
          </h1>
          <p className="font-normal text-[21px] leading-[30px]  m-0 text-white font-Poppins">
            All about us
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="rounded-full bg-btncolor w-10 h-10 flex items-center justify-center">
              <Image
                src="/images/map/expand_more.svg"
                width={24}
                height={24}
                alt="show more"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wather-img" />
    </div>
  );
};

export default Hero;
