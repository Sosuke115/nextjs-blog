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
            height={180}
            width={180}
            alt={props.name}
          />
        </div>

        <div className={`${utilStyles.headingMd} ${styles.profileText}`}>
          <div className={`${utilStyles.headingXl} ${styles.profileName}`}>
            {props.name}
          </div>
          <div>
            ML/Software Engineer,{" "}
            <Link href="https://about.yahoo.co.jp/">
              Yahoo Japan Corporation
            </Link>
          </div>

          <div>
            Master of Information Science and Technology,{" "}
            <a href="https://www.i.u-tokyo.ac.jp/index_e.shtml">
              The University of Tokyo
            </a>
            , 2022
          </div>

          <div>
            Bachelor of Engineering,{" "}
            <a href="https://www.ee.t.u-tokyo.ac.jp/j/">
              The University of Tokyo
            </a>
            , 2020
          </div>

          <div>
            <a href="https://sosuke115.github.io/">Here</a> is the previous
            portfolio.
          </div>
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
            height={180}
            width={180}
            alt={props.name}
          />
        </div>

        <div className={`${utilStyles.headingMd} ${styles.profileText}`}>
          <div className={`${utilStyles.headingXl} ${styles.profileName}`}>
            {props.name}
          </div>

          <div>
            機械学習/ソフトウェアエンジニア,{" "}
            <Link href="https://about.yahoo.co.jp/">ヤフー株式会社</Link>
          </div>

          <div>
            <a href="https://www.i.u-tokyo.ac.jp/edu/course/ice/">
              東京大学大学院 情報理工学研究科 電子情報学専攻修了
            </a>
            , 2022
          </div>

          <div>
            <a href="https://www.ee.t.u-tokyo.ac.jp/j/">
              東京大学 工学部 電子情報工学科卒
            </a>
            , 2020
          </div>

          <div>
            学生時代のポートフォリオは
            <a href="https://sosuke115.github.io/">コチラ</a>
          </div>
        </div>
      </div>
    );
  }
}
