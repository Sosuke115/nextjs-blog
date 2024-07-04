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
            Profile
          </div>
          <p className={`${utilStyles.headingMd} ${styles.profileText}`}>
          Sosuke Nishikawa （西川 荘介）[<Link href="https://sosuke.info/files/cv.pdf">CV</Link>]
          
          <br />
            Research Engineer,{" "}
            <Link href="https://www.lycorp.co.jp/en/">
              LY Corporation
            </Link>
            <br />
            Master of Information Science and Technology,{" "}
            <a href="https://www.i.u-tokyo.ac.jp/index_e.shtml">
              The University of Tokyo
            </a>
            , 2022
            <br />
            Bachelor of Engineering,{" "}
            <a href="https://www.ee.t.u-tokyo.ac.jp/en/">
              The University of Tokyo
            </a>
            , 2020
            <br />
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
            プロフィール
          </div>
          <p className={`${utilStyles.headingMd} ${styles.profileText}`}>
            西川 荘介（にしかわ そうすけ）[<Link href="https://sosuke.info/files/cv.pdf">CV</Link>]
            <br />
            リサーチエンジニア,{" "}
            <Link href="https://www.lycorp.co.jp/ja/">LINEヤフー株式会社</Link>
            <br />
            <a href="https://www.i.u-tokyo.ac.jp/edu/course/ice/">
              東京大学大学院 情報理工学研究科 電子情報学専攻博士前期課程修了
            </a>
            , 2022
            <br />
            <a href="https://www.ee.t.u-tokyo.ac.jp/">
              東京大学 工学部 電子情報工学科卒業
            </a>
            , 2020
            <br />
          </p>
        </div>
      </div>
    );
  }
}
