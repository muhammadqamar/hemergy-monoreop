import Link from "next/link";
import ProjectCard from "./projectCard";
import Slider from "react-slick";
import InvestmentCard from "./InvestmentCard";

const CalculatorSection = () => {
  const settings = {
    arrows: false,
    dots: false,
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <>
      <div className="calculator-main-section">
        <div className="invest-calcu">
          <InvestmentCard />
        </div>
        {/** we works */}
        <div className="work-section">
          <h2 className="work-heading">We work with</h2>
          <div className="work-logos">
            <img src="/images/work_1.png" alt="logo" className="companys-logo" />
            <img src="/images/work_2.png" alt="logo" className="companys-logo" />
            <img src="/images/work_3.png" alt="logo" className="companys-logo" />
            <img src="/images/work_4.png" alt="logo" className="companys-logo" />
          </div>
        </div>
        <div className="white-wather-bg" />
      </div>
      <div>
        {/** projects */}
        <div className="popular-project-section">
          <div className="popular-about">
            <h1 className="popular-heading">Popular projects</h1>
            <p className="popular-para">
              A selection of the types of projects you can get involved in today!{" "}
              <strong>
                <Link href="">See all</Link>
              </strong>
            </p>
          </div>
          <Slider {...settings}>
            <div>
              <ProjectCard />
            </div>
            <div>
              <ProjectCard />
            </div>
            <div>
              <ProjectCard />
            </div>
            <div>
              <ProjectCard />
            </div>
            <div>
              <ProjectCard />
            </div>
            <div>
              <ProjectCard />
            </div>
            <div>
              <ProjectCard />
            </div>

            <div>
              <ProjectCard />
            </div>
            <div>
              <ProjectCard />
            </div>
            <div>
              <ProjectCard />
            </div>
            <div>
              <ProjectCard />
            </div>
            <div>
              <ProjectCard />
            </div>
            <div>
              <ProjectCard />
            </div>
            <div>
              <ProjectCard />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CalculatorSection;
