import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Profile from "../components/profile";

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();

  // const allPostsData = getPostData('pre-rendering');
  console.log(allPostsData);
  const idToData = { contentHtml: {}, title: {} };
  // const idToTitle = {};
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
  console.log(idToData);
  const idList = ["workExperience", "publications", "products", "awards"];
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Profile />

      {/* TODO post.js */}

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
