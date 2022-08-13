import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

const HamburgerMenu = () => (
  <div className="relative p-2">
    <Menu right
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className="left-0 top-12"
    >
      <Links />
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div className="p-1/2">
    <svg
      className="w-8 h-8 text-gray-500"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
);

export const Links = () => (
  <>
    <Link href="/">
      <a className="font-bold p-4">About</a>
    </Link>
    <Link href="/index_ja">
      <a className="font-bold p-4">日本語</a>
    </Link>
    <Link href="/experiences">
      <a className="font-bold p-4">Experiences</a>
    </Link>
    <Link href="/links">
      <a className="font-bold p-4">Links</a>
    </Link>
    <Link href="https://nchaso.hatenablog.com">
      <a className="font-bold p-4">Blog</a>
    </Link>
  </>
);

export default HamburgerMenu;
