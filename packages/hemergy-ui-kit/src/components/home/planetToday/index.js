import Link from "next/link";
import InvestingTab from "./investingTab";
import ApiCard from "../apiCard";

const Index = () => {
  return (
    <div className="planet-today-sectiion">
      <div className="planet-about">
        <h1 className="planet-heading">Start investing in the future of our planet today!</h1>
        <p className="planet-para">
          No hidden fees, just transparent projects. Contribute to the energy revolution
        </p>
        <Link href="" className="btn Primary">
          Get started
        </Link>
      </div>

      <InvestingTab />

      <ApiCard />
    </div>
  );
};

export default Index;
