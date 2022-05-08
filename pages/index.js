import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Profile from "../components/profile";
import Layout, { siteTitle } from "../components/layout";

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
        <title>{siteTitle}</title>
      </Head>

      <Profile />

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {idList.map((id) => (
            <li className={utilStyles.listItem}>
              <h2 className={utilStyles.headBorder}>{idToData.title[id]}</h2>
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
