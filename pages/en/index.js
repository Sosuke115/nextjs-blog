import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { getStaticPropsLib } from "../../lib/posts";
import Profile from "../../components/profile";
import Layout from "../../components/layout";

export async function getStaticProps() {
  return getStaticPropsLib();
}

export default function Home({ idToData }) {
  const idList = ["news"];
  return (
    <Layout>
      <Head>
        <title>Sosuke Nishikawa's Portfolio</title>
      </Head>
      <Profile name="Sosuke Nishikawa"/>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {idList.map((id) => (
            <li className={utilStyles.listItem}>
              <h1 className={utilStyles.headBorder}>{idToData.title[id]}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: idToData.contentHtml[id] }}
              />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
