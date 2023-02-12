import ProjectCard from "./projectCard";
import Slider from "react-slick";

const CardArea = () => {
  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <div className="card-area">
      <div className="mb-8">
        <h2 className="p-xl mb-3">Featured projects</h2>
        <p className="p-sm text-gray900">There are hot projects lorem ipsum etc</p>
      </div>
      <div className="project-slider">
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
        </Slider>
      </div>
      {/* <div className="flex-box mt-11">
        <button className="btn-border fit-width bg-white secondary">Browse all projects</button>
  </div>*/}
    </div>
  );
};

export default CardArea;
