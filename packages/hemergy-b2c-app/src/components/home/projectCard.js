import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="card-header">
        <div className="card-header-wather">
          <Image src="/images/clear_day.svg" width={20} height={20} alt="wather logo" />
          <p className="wather-label">Wind</p>
        </div>
        <div className="wather-rating">
          <Image src="/images/Polygon.svg" width={10} height={10} alt="rating" />
          <p className="wather-label rating">657.4</p>
        </div>
      </div>
      <h2 className="pro-card-neading">Project name</h2>
      <p className="pro-card-text">
        It is a long established fact that a reader will be distracted.
      </p>

      <div className="pro-card-user">
        <img src="/images/user.png" alt="user" className="user-img" />
        <div className="user-abouts">
          <h5 className="useer-name">George White</h5>
          <p className="user-cat">Project owner</p>
        </div>
      </div>
      <Link href="" className="btn-w ">
        View details
      </Link>
    </div>
  );
};

export default ProjectCard;
