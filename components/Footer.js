import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { VscTwitter, VscGithub, VscLinkedin, VscMail } from "react-icons/vsc";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <div className={`${utilStyles.footer}`}>
      {/* <div className={utilStyles.snsIcons}> */}
      <a
        href="https://twitter.com/ponyo_ponyo115"
        className={utilStyles.snsIcons}
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

      <a href="https://github.com/Sosuke115" className={utilStyles.snsIcons}>
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
        href="https://www.linkedin.com/in/sosuke-nishikawa-2100581a0/"
        className={utilStyles.snsIcons}
      >
        <IconContext.Provider
          value={{
            style: {
              fontSize: "2.5rem",
            },
          }}
        >
          <FaLinkedin />
        </IconContext.Provider>
      </a>

      <a href="mailto:sosuken115@gmail.com" className={utilStyles.snsIcons}>
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
      {/* </div> */}

      <div>© Sosuke Nishikawa</div>
    </div>
  );
}
