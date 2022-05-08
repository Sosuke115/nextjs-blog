import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        priority
        src="/images/sosuke.jpg"
        className={styles.borderCircle}
        height={30}
        width={30}
      />
      <div className={styles.portfolioTitle}>Sosuke's Portfolio</div>
      <div className={styles.langLinks}>
      <div className={styles.langLink}>
        <Link href={`/`}>
          <a>En</a>
        </Link>
      </div>
      <div className={styles.langLink}>
        <Link href={`/index_ja`}>
          <a>Ja</a>
        </Link>
      </div>
      </div>
    </div>
  );
}
