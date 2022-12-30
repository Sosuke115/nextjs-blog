import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from 'react';
import styles from "./menu.module.css";

export function MenuBar(props) {
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuVisible(true);
      } else {
        setMenuVisible(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMenuVisible && (
        <div className={styles.menubar}>
          <Links isJapanese={props.isJapanese} />
        </div>
      )}
    </div>
  );
}

export default function HamburgerMenu(props) {
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMenuVisible(true);
      } else {
        setMenuVisible(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMenuVisible && (
  <div className="relative p-2">
    <Menu right
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className="left-0 top-12"
    >
      <Links isJapanese={props.isJapanese} />
    </Menu>
  </div>
      )}
    </div>
  );
}
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

export const Links = (props) => (
  <>
    {props.isJapanese ? (
      <Link href="/ja">
        <a className="font-bold p-4">ホーム</a>
      </Link>
    ) : (
      <Link href="/en">
        <a className="font-bold p-4">Home</a>
      </Link>
    )}
    {props.isJapanese ? (
      <Link href="/experiences">
        <a className="font-bold p-4">経験</a>
      </Link>
    ) : (
      <Link href="/experiences">
        <a className="font-bold p-4">Experiences</a>
      </Link>
    )}
    {props.isJapanese ? (
      <Link href="/experiences">
        <a className="font-bold p-4">研究業績</a>
      </Link>
    ) : (
      <Link href="/experiences">
        <a className="font-bold p-4">Publications</a>
      </Link>
    )}
    {props.isJapanese ? (
      <Link href="/links">
        <a className="font-bold p-4">リンク</a>
      </Link>
    ) : (
      <Link href="/links">
        <a className="font-bold p-4">Links</a>
      </Link>
    )}
    {props.isJapanese ? (
      <Link href="https://nchaso.hatenablog.com">
        <a className="font-bold p-4">ブログ</a>
      </Link>
    ) : (
      <Link href="https://nchaso.hatenablog.com">
        <a className="font-bold p-4">Blog</a>
      </Link>
    )}
    {props.isJapanese ? (
      <Link href="/en">
        <a className="font-bold p-4">En</a>
      </Link>
    ) : (
      <Link href="/ja">
        <a className="font-bold p-4">日本語</a>
      </Link>
    )}
  </>
);
