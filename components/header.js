import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.portfolioTitle}>Sosuke's Portfolio</div>
      <div className={styles.jaLink}>
        <Link href={`/index_ja`}>
          <a>日本語</a>
        </Link>
      </div>
    </div>
  );
}
