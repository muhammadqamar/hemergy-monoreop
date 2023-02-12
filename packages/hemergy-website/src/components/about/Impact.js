import Image from 'next/image';
import React from 'react';

const Impact = () => {
  return (
    <section className='w-full h-auto pt-[160px] "'>
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-semibold text-[48px] leading-[62px]  m-0 text-textcolor">
          Your impact
        </h2>
        <div className="flex items-center mt-[52px]">
          {/* Left side Images */}
          <div className="">
            <Image src={'/images/about_1.png'} width={480} height={480} />
            <div className="flex">
              <Image src={'/images/about_2.png'} width={108} height={80} />
              <Image src={'/images/about_3.png'} width={108} height={80} />
              <Image src={'/images/about_4.png'} width={108} height={80} />
              <Image src={'/images/about_5.png'} width={108} height={80} />
            </div>
          </div>
          {/* Right Text */}
          <div className="ml-[64px]">
            <h3 className="font-semibold text-[64px] leading-[77px]  m-0 text-textcolor">
              Community
              <br />
              conservation
            </h3>
            <p className="font-normal  text-xl leading-[30px]  m-0 text-textcolor max-w-[480px]">
              We create opportunities to protect biodiversity and make local
              communities participate as much as possible in local projects.
              This generates work and shared trust in the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
