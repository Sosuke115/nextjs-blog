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
          <meta name="author" content="Sosuke Nishikawa"/>
          <meta
            name="description"
            content="Homepage of Sosuke Nishikawa"
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
