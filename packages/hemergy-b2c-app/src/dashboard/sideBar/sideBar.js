import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div className="flex-box flex-col side-nav-bar">
      <Image src="/images/logo_cue.svg" alt="logo" width={32} height={32} />
      <div className="flex-box flex-col gap-4 ">
        <Link
          href="/projects"
          className={currentRoute === "/projects" ? "menu-item active" : "menu-item"}
        >
          <Image src="/images/monitoring.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link
          href="/checkout"
          className={currentRoute === "/checkout" ? "menu-item active" : "menu-item"}
        >
          <Image src="/images/apps.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link href="" className="menu-item">
          <Image src="/images/hemergy.svg" alt="logo" width={20} height={20} />
        </Link>
      </div>
      <div className="flex-box flex-col gap-4">
        <Link href="" className="menu-item">
          <Image src="/images/twitter.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link href="" className="menu-item">
          <Image src="/images/medium.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link href="" className="menu-item">
          <Image src="/images/help.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link href="" className="dash-user-img">
          <img src="/images/user.png" alt="logo" />
        </Link>
        <button className="menu-item">
          <Image src="/images/logout.svg" alt="logo" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
