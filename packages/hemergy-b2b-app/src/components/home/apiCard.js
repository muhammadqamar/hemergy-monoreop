import Image from "next/image";
import Link from "next/link";
const ApiCard = () => {
  return (
    <div className="api-card-box">
      <Image src="/images/code.svg" alt="" width={51} height={51} />
      <h1 className="api-heading">Want to use our api?</h1>
      <p className="api-about">
        We provide a white label solution to businesses who want to develop and market their own
        financial products
      </p>

      <Link href="" className="btn Primary">
        Book a demo
      </Link>
    </div>
  );
};

export default ApiCard;
