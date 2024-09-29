import styles from "./footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { VscTwitter, VscGithub, VscMail, VscAccount} from "react-icons/vsc";
import { SiGooglescholar } from "react-icons/si";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <a
        href="https://twitter.com/ponyo_ponyo115"
        className={styles.snsIcons}
      >
        <IconContext.Provider
          value={{
            style: {
              fontSize: "2.5rem",
            },
          }}
        >
          <VscTwitter />
        </IconContext.Provider>
      </a>

      <a href="https://github.com/Sosuke115" className={styles.snsIcons}>
        <IconContext.Provider
          value={{
            style: {
              fontSize: "2.5rem",
            },
          }}
        >
          <VscGithub />
        </IconContext.Provider>
      </a>

      <a
        // href="https://www.linkedin.com/in/sosuke-nishikawa-2100581a0/"
        href="https://scholar.google.co.jp/citations?user=LH021foAAAAJ"
        className={styles.snsIcons}
      >
        <IconContext.Provider
          value={{
            style: {
              fontSize: "2.5rem",
            },
          }}
        >
          <SiGooglescholar />
        </IconContext.Provider>
      </a>

      <a href="mailto:sosuken115@gmail.com" className={styles.snsIcons}>
        <IconContext.Provider
          value={{
            style: {
              fontSize: "2.5rem",
            },
          }}
        >
          <VscMail />
        </IconContext.Provider>
      </a>
      <div>© Sosuke Nishikawa</div>
    </div>
  );
}
