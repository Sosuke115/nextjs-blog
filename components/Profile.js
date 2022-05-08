import utilStyles from "../styles/utils.module.css";
import styles from "./profile.module.css";
import Image from "next/image";
import Link from "next/link";
const name = "Sosuke Nishikawa";

export default function Profile() {
  return (
      <div>テスト</div>
    // <div className={styles.flexContainer}>
    //   <Image
    //     priority
    //     src="/images/profile.jpg"
    //     className={`${utilStyles.borderCircle} ${styles.profileImage}`}
    //     height={180}
    //     width={180}
    //     alt={name}
    //   />

    //   <div className={`${utilStyles.headingMd} ${styles.profileText}`}>
    //     <div className={utilStyles.headingXl}>{name}</div>

    //     <div>
    //       ML/Software Engineer,{" "}
    //       <Link href="https://about.yahoo.co.jp/">Yahoo Japan Corporation</Link>
    //     </div>

    //     <div>
    //       Master of Information Science and Technology,{" "}
    //       <a href="https://www.i.u-tokyo.ac.jp/index_e.shtml">
    //         The University of Tokyo
    //       </a>
    //       , 2022
    //     </div>

    //     <div>
    //       Bachelor of Engineering,{" "}
    //       <a href="https://www.ee.t.u-tokyo.ac.jp/j/">
    //         The University of Tokyo
    //       </a>
    //       , 2020
    //     </div>

    //     <div>
    //       <a href="https://sosuke115.github.io/">Here</a> is the previous
    //       portfolio.
    //     </div>
    //   </div>
    // </div>
  );
}
