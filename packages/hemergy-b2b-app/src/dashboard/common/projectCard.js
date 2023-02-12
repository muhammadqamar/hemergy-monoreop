import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="project-card-box">
      <div className="card-head-img ">
        <img src="/images/card.png" alt="img" className="card-bg-img" />
        <div className="w-full flex-box">
          <div className="labels-frame wather-labels">
            <Image src="/images/hot.svg" alt="logo" width={20} height={20} />
            <p className="p-sm-semi  text-white">Hot</p>
          </div>
          <div className=" labels-frame terms-sheet-labels">
            <Image src="/images/download.svg" alt="logo" width={20} height={20} />
            <p className="p-sm-semi  text-white">Terms sheet</p>
          </div>
          <div className=" labels-frame ratio-labels">
            <Image src="/images/Polygon.svg" alt="logo" width={10} height={10} />
            <p className="p-sm-semi  text-white">657.4</p>
          </div>
        </div>
      </div>
      <div className="project-card-about">
        <div className="flex-box gap-2">
          <div className="solar-label">
            <Image src="/images/clear_day.svg" alt="logo" width={20} height={20} />
            <p className="p-sm-semi  text-textcolor">Solar Asset Name</p>
          </div>
          <div className="location-label">
            <Image src="/images/location_on.svg" alt="logo" width={16} height={16} />
            <p className="p-sm-semi font-medium text-textcolor">Location name</p>
          </div>
        </div>
        <div>
          <h4 className="p-lg mb-2">Project name</h4>
          <p className="p-sm-semi font-normal text-gray800">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </p>
        </div>
        <div className="project-user-details">
          <div className="project-user">
            <img src="/images/user.png" alt="user" className="project-user-img" />
            <div>
              <h6 className="p-sm font-semibold mb-1">Bradley Grahams</h6>
              <p className="p-x-sm font-medium text-gray900">Project owner</p>
            </div>
          </div>
          <div className="project-tokens">
            <Image src="/images/token.png" alt="token" width={32} height={32} />
            <div>
              <h5 className="p-xl text-textcolor mb-1">200</h5>
              <p className="p-x-sm font-medium text-gray900">Available</p>
            </div>
          </div>
        </div>
        {/*<div className="usdc-earned-box">
          <Image src="/images/payments.svg" alt="USDC" width={32} height={32} />
          <div className="usdc-earnes">
            <h4 className="p-xl font-semibold text-textcolor ">234</h4>
            <h5 className="p-x-sm font-semibold text-textcolor">USDC Earned</h5>
            <p className="p-xs text-gray900">Since 13 Jan 2023</p>
          </div>
  </div>*/}

        <div className="flex-box gap-2">
          <button className="btn secondary w-full text-textcolor bg-cardbg ">Details</button>
          <button className="btn secondary w-full text-textcolor bg-cardbg ">Invest</button>
        </div>

        {/*<div className="flex-box gap-2">
          <button className="btn secondary w-full text-textcolor bg-cardbg ">
            Matures: 01/02/24
          </button>
          <button className="btn secondary w-full text-white bg-green500 ">Buy more</button>
</div>*/}
      </div>
    </div>
  );
};

export default ProjectCard;
