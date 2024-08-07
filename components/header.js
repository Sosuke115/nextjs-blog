import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import HamburgerMenu, { Links, MenuBar } from "./menu";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <Link href="/">
      <a>
      <Image
        priority
        src="/images/sosuke.jpg"
        className={styles.borderCircle}
        height={30}
        width={30}
        alt="Sosuke"
      />
      </a>
      </Link>
      <Link href="/">
      <a className={styles.portfolioTitle}>Sosuke's Portfolio</a>
      </Link>
      <div>
      <HamburgerMenu isJapanese={props.isJapanese} />
      <MenuBar isJapanese={props.isJapanese} />
      </div>
    </div>
  );
}
