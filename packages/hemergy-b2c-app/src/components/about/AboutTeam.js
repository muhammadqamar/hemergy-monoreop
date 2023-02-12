import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TeamCard from './TeamCard';
import Slider from 'react-slick';
const AboutTeam = () => {
  const settings = {
    // className: "center",
    // centerMode: true,
    // infinite: true,
    // centerPadding: "60px",
    // slidesToShow: 4,
    // speed: 500,
    arrows: false,
    dots: false,
    className: 'slider variable-width',
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <section className="pt-[160px]">
      <div className="api-card-box">
        {/* <Image src="/images/code.svg" alt="" width={51} height={51} /> */}
        <h1 className="api-heading">
          Start investing in the <br /> future of our planet today!
        </h1>
        <p className="api-about">
          No hidden fees, just transparent projects. Contribute to the energy
          revolution
        </p>

        <Link href="" className="btn Primary">
          Get started
        </Link>
      </div>

      <div className="text-center mt-[160px] ">
        <h3 className=" font-semibold text-[48px] m-0 text-textcolor">
          The team
        </h3>
        <div>
          <Slider {...settings}>
            <div>
              <TeamCard />
            </div>
            <div>
              <TeamCard />
            </div>
            <div>
              <TeamCard />
            </div>
            <div>
              <TeamCard />
            </div>
            <div>
              <TeamCard />
            </div>
            <div>
              <TeamCard />
            </div>
            <div>
              <TeamCard />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
