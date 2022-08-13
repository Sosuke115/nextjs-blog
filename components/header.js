import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import HamburgerMenu, { Links } from "./menu";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className='flex md:hidden'><HamburgerMenu /></div>
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
      {/* <div className={styles.portfolioTitle}>Sosuke's Portfolio</div> */}
      {/* <div className={styles.langLinks}>
        <div className={styles.langLink}> */}
          {/* <Link href={`/`}>
          <a>En</a>
        </Link>
      </div>
      <div className={styles.langLink}>
        <Link href={`/index_ja`}>
          <a>Ja</a>
        </Link> */}
        {/* </div>
      </div> */}
    </div>
  );
}
