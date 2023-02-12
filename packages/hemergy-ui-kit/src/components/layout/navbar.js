import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="main-nav-wrapper">
        <div className="nav-logo">
          <Image src="/images/hemergy-logo.svg" alt="hemergy logo" width={150} height={32} />
        </div>
        <div className="nav-links-box">
          <Link href="" className="nav-link">
            How it works
          </Link>
          <Link href="" className="nav-link">
            About
          </Link>
          <Link href="" className="nav-link">
            For Investors
          </Link>
          <Link href="" className="nav-link">
            For Businesses
          </Link>
        </div>
        <div className="nav-reginter">
          <Link href="" className="nav-link">
            Sign in
          </Link>

          <Link href="/register" className="btn secondary">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
