import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Layout, { siteTitle } from "../components/layout";

// TODO getStaticPropsの共通化
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

// TODO 英語ページの作成
export default function Home({ idToData }) {
    console.log(idToData);
  const idList = ["経験_学歴", "経験_賞", "経験_インターン", "研究業績", "経験_プログラミング", "経験_その他"];
  return (
    <Layout>
      <Head>
        <title>西川荘介のポートフォリオ</title>
      </Head>
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
