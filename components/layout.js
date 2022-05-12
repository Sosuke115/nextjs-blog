import Head from "next/head";
import styles from "./layout.module.css";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
          <meta name="robots" content="all" />
          <meta
            name="description"
            content="Sosuke Nishikawa, ML/Software Engineer, Yahoo Japan Corporation"
            key="desc"
          />
          <meta charset="UTF-8"/>
          <meta name="og:title" content="Sosuke Nishikawa's Portfolio" />
        </Head>
        {children}
      </div>
      <Footer />
    </>
  );
}
