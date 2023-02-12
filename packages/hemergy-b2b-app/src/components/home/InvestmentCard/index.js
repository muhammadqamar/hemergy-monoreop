import { useState } from "react";
import Image from "next/image";
import AvoidedCard from "./avoidedCard";
import Contribution from "./contribution";
import EarningCard from "./earningCard";

const Index = () => {
  const [moco, setmoco] = useState(10);
  return (
    <div className="investment-card">
      <div className="invest-about">
        <Image src="/images/local_atm.svg" alt="investment" width={51} height={51} />
        <h3 className="investment-heading">Investment calculator</h3>
        <p className="investment-para">
          Use this calculator to see an indication of your average return on investment, and your
          environmental impact
        </p>
      </div>
      <div className="contribution-card">
        <div className="contribution-rate">
          <h3 className="rate-price">
            {moco}
            <sup>€</sup>
          </h3>

          <h5 className="rate-lemet">/ m</h5>
        </div>
        <p className="contribution-heading">Contribution</p>

        <div className="contribution-slide">
          <input
            type="range"
            min="10"
            max="300"
            step="5"
            defaultValue={10}
            onChange={(e) => setmoco(e.target.value)}
            style={{
              backgroundSize: `  ${(moco / 300) * 100}%   , ${((300 - moco) / 300) * 100}% `,
            }}
          />
        </div>
      </div>
      <div className="earning-card">
        <div className="earning-in-yr">
          <h3 className="earning-price">
            {Math.round(237.152 * moco)} <sup>€</sup>
          </h3>
          <h5 className="yr-earning">in 20 yr</h5>
        </div>
        <p className="earning-heading">Earnings</p>
      </div>
      <div className="avoided-card">
        <div className="avoided-tonnes">
          <h3 className="avoided-price">{Math.round(38.9159 * moco) / 10}</h3>
          <h5 className="avo-tonnes"> Tonnes</h5>
        </div>
        <p className="avoided-heading">Avoided Carbon</p>
      </div>
    </div>
  );
};

export default Index;
