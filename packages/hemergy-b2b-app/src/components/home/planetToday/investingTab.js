import Image from "next/image";
import { useState } from "react";

const user = [
  {
    userImg: "/images/star.svg",
    userName: "Julia Dlamini",
    userCat: "Position / Company",
    aboutHeading: "Wonderful experience from start to finish!",
    aboutPara1:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    aboutPara2:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'",
  },
  {
    userImg: "/images/star.svg",
    userName: "Julia ",
    userCat: "Position ",
    aboutHeading: "Wonderful experience from start to finish!",
    aboutPara1:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    aboutPara2:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,  and a search for 'lorem ipsum'",
  },
  {
    userImg: "/images/star.svg",
    userName: "Julia Dlamini",
    userCat: " Company",
    aboutHeading: "Wonderful experience from start to finish!",
    aboutPara1:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    aboutPara2:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'",
  },
];

const InvestingTab = () => {
  const [openTab, setOpenTab] = useState(0);

  return (
    <div className="investing-tab-section">
      {user.map((item, index) => (
        <div key={index}>
          <div className="user-tabs">
            <div
              onClick={() => setOpenTab(index)}
              className={openTab === index ? "user-tab-card active" : "user-tab-card"}
            >
              <img src="/images/user.png" alt="user" className="user-img" />
              <div className="user-detail">
                <h4 className="user-tab-name">{item.userName}</h4>
                <h5 className="user-tab-cate">{item.userCat}</h5>
              </div>
            </div>
          </div>
          {openTab === index && (
            <div className="user-tab-about">
              <h2 className="tab-about-heading">{item.aboutHeading}</h2>
              <Image src="/images/star.svg" alt="" width={80} height={16} />
              <p className="user-tab-about-para">
                {item.aboutPara1} <br /> <br /> {item.aboutPara2}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InvestingTab;
