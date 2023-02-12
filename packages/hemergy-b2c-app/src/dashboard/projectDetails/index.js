import Image from "next/image";
import Tokens from "./tokens";

const Index = () => {
  return (
    <div className="dashboard-container">
      <div className="project-detail">
        <div className="detail-img">
          <img src="/images/dummy.png" alt="detail" className="detail-banner-img" />
          <div className="w-full flex-box">
            <div className="labels-frame wather-labels">
              <Image src="/images/hot.svg" alt="logo" width={20} height={20} />
              <p className="p-sm-semi  text-white">Hot</p>
            </div>
            <div className=" labels-frame ratio-labels">
              <Image src="/images/Polygon.svg" alt="logo" width={10} height={10} />
              <p className="p-sm-semi  text-white">657.4</p>
            </div>
          </div>
        </div>
        <div className="project-detail-about">
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
            <h3 className="p-xl-semi mb-4">Project name</h3>
            <p className="p-sm text-gray800">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. <br /> <br />
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their
              default model text, and a search for 'lorem ipsum' will uncover many web sites still
              in their infancy. Various versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
          </div>
          <div className="project-detail-user ">
            <img src="/images/user.png" alt="user" className="detail-user-img" />
            <div>
              <div className="flex-box mb-2">
                <div>
                  <h6 className="p-lg mb-1">Bradley Grahams</h6>
                  <p className="p-x-sm font-medium text-gray900">Project owner</p>
                </div>
                <div className="user-company">
                  <img src="/images/kg-logo.svg" alt="company" />
                </div>
              </div>
              <p className="p-sm-semi font-normal text-gray800">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.{" "}
              </p>
            </div>
          </div>
          <div className="project-detail-user ">
            <img src="/images/company.svg" alt="user" className="detail-user-img" />
            <div>
              <div className="flex-box mb-2">
                <div>
                  <h6 className="p-lg mb-1">Bradley Grahams</h6>
                  <p className="p-x-sm font-medium text-gray900">Project owner</p>
                </div>
              </div>
              <p className="p-sm-semi font-normal text-gray800">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.{" "}
              </p>
            </div>
          </div>
          <div className="project-detail-user ">
            <img src="/images/company-2.svg" alt="user" className="detail-user-img" />
            <div>
              <div className="flex-box mb-2">
                <div>
                  <h6 className="p-lg mb-1">Bradley Grahams</h6>
                  <p className="p-x-sm font-medium text-gray900">Project owner</p>
                </div>
              </div>
              <p className="p-sm-semi font-normal text-gray800">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.{" "}
              </p>
            </div>
          </div>
        </div>
        <Tokens />
      </div>
    </div>
  );
};

export default Index;
