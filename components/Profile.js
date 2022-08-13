import utilStyles from "../styles/utils.module.css";
import styles from "./profile.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Profile(props) {
  if (props.name == "Sosuke Nishikawa") {
    return (
      <div className={styles.flexContainer}>
        <div className={styles.profileImage}>
          <Image
            priority
            src="/images/profile.jpg"
            className={`${utilStyles.borderCircle}`}
            height={210}
            width={210}
            alt={props.name}
          />
        </div>

        <div className={styles.profileTextWrapper}>
          <div className={`${utilStyles.headingXl} ${styles.profileName}`}>
            {props.name}
          </div>
          <p className={`${utilStyles.headingMd} ${styles.profileText}`}>
            ML/Software Engineer,{" "}
            <Link href="https://about.yahoo.co.jp/">
              Yahoo Japan Corporation
            </Link>
            <br />
            Master of Information Science and Technology,{" "}
            <a href="https://www.i.u-tokyo.ac.jp/index_e.shtml">
              The University of Tokyo
            </a>
            , 2022
            <br />
            Bachelor of Engineering,{" "}
            <a href="https://www.ee.t.u-tokyo.ac.jp/j/">
              The University of Tokyo
            </a>
            , 2020
            <br />
            {/* <a href="https://sosuke115.github.io/">Here</a> is the previous
            portfolio. */}
          </p>
        </div>
      </div>
    );
  } else if (props.name == "西川 荘介") {
    return (
      <div className={styles.flexContainer}>
        <div className={styles.profileImage}>
          <Image
            priority
            src="/images/profile.jpg"
            className={`${utilStyles.borderCircle}`}
            height={210}
            width={210}
            alt={props.name}
          />
        </div>

        <div className={styles.profileTextWrapper}>
          <div className={`${utilStyles.headingXl} ${styles.profileName}`}>
            {props.name}
          </div>
          <p className={`${utilStyles.headingMd} ${styles.profileText}`}>
            機械学習/ソフトウェアエンジニア,{" "}
            <Link href="https://about.yahoo.co.jp/">ヤフー株式会社</Link>
            <br />
            <a href="https://www.i.u-tokyo.ac.jp/edu/course/ice/">
              東京大学大学院 情報理工学研究科 電子情報学専攻博士前期課程修了
            </a>
            , 2022
            <br />
            <a href="https://www.ee.t.u-tokyo.ac.jp/j/">
              東京大学 工学部 電子情報工学科卒
            </a>
            , 2020
            <br />
            {/* 学生時代のポートフォリオは
            <a href="https://sosuke115.github.io/">コチラ</a> */}
          </p>
        </div>
      </div>
    );
  }
}
