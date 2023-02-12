import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [upDate, setUpDate] = useState("");

  console.log(upDate);

  useEffect(() => {
    const intervil = setInterval(() => {
      const data = ["wind", "sun", "bio"];
      // i = (i + 1) % data.length;

      setUpDate(data);
    }, 2000);
    return () => clearInterval(intervil);
  }, [upDate]);

  return (
    <div className="hero-container ">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="main-heading">
            Invest in the <br /> future of our planet
          </h1>
          <h3 className="sub-heading ">
            Hemergy is a cutting-edge <br />
            <strong> renewable energies</strong> investment platform
          </h3>
          <h3 className="sub-heading about-w">
            See what you earn from
            <span className="wind">
              <Image src="/images/air.svg" width={32} height={32} alt="wind" /> Wind
            </span>
            {/*<span className="sun">
                <Image src="/images/clear_day_w.svg" width={32} height={32} alt="wind" /> Sun
              </span>
          
      
              <span className="bio">
                <Image src="/images/humidity_low.svg" width={32} height={32} alt="wind" /> Biomass
              </span>
  */}
          </h3>

          <Link href="" className="btn Primary">
            Get started
          </Link>
        </div>

        <div className="hero-banner-img">
          <img src="/images/hero-start.png" className="hero-start" alt="banner" />
          <img src="/images/hero-wather-bg.png" className="hero-wather" alt="banner" />
          <img src="/images/hero-user-card.png" className="hero-user-card" alt="banner" />
        </div>
      </div>
      <div className="hero-wather-img" />
    </div>
  );
};

export default Hero;
