import Image from "next/image";

const Tokens = () => {
  return (
    <div className="tokens-wrapper">
      <h6 className="p-md text-center ">1,234 Tokens issued</h6>
      <div className="available-token my-[57px]">
        <Image src="/images/token.png" alt="token" width={32} height={32} />
        <div className="text-center">
          <h1 className="p-2xl mb-1">200</h1>
          <p className="p-sm-semi text-white">Equity tokens available</p>
        </div>
      </div>
      <button className="btn secondary w-full mb-6">Invest now</button>

      <div className="flex-box gap-4 mb-4">
        <div className="power-box">
          <Image src="/images/bolt.svg" alt="power" width={40} height={40} />
          <h4 className="p-xl  text-white">2.3kW</h4>
          <p className="p-x-sm font-medium text-white">Power generated</p>
        </div>
        <div className="power-box">
          <Image src="/images/cloud_off.svg" alt="power" width={40} height={40} />
          <h4 className="p-xl  text-white">2.3kW</h4>
          <p className="p-x-sm font-medium text-white">Carbon avoided</p>
        </div>
      </div>

      <div className="year-box mb-6">
        <div className="flex-box mb-4">
          <div>
            <h5 className="p-xl text-white mb-1">15</h5>
            <p className="p-x-sm font-medium text-white">Year</p>
          </div>
          <div>
            <h5 className="p-xl text-white mb-1">35,553</h5>
            <p className="p-x-sm font-medium text-right text-white">USDC</p>
          </div>
        </div>
        <div className="year-range">
          <input
            type="range"
            min="10"
            max="300"
            step="5"
            defaultValue={10}
            style={{
              backgroundSize: `40% , 100% `,
            }}
          />
        </div>
      </div>
      <div className="what-token">
        <div className="flex-box gap-2 justify-start mb-2">
          <Image src="/images/info.svg" alt="info" width={24} height={24} />
          <h5 className="p-sm font-semibold text-white">What are tokens?</h5>
        </div>
        <p className="p-sm-semi font-normal text-blue200">
          Tokens represent part of the physical asset asset name. When you buy tokens, you are
          investing in these.
        </p>
      </div>
    </div>
  );
};

export default Tokens;
