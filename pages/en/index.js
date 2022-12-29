import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";
import Profile from "../../components/profile";
import Layout from "../../components/layout";

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  const idToData = { contentHtml: {}, title: {} };
  allPostsData.forEach((data) => {
    idToData["contentHtml"][data["id"]] = data["contentHtml"];
    idToData["title"][data["id"]] = data["title"];
  });
  return {
    props: {
      idToData,
    },
  };
}
export default function Home({ idToData }) {
  const idList = ["workExperience", "publications", "products", "awards"];
  return (
    <Layout>
      <Head>
        <title>Sosuke Nishikawa's Portfolio</title>
      </Head>

      <Profile name="Sosuke Nishikawa"/>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {idList.map((id) => (
            <li key={id} className={utilStyles.listItem}>
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
