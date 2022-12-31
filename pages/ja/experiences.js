import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { getStaticPropsLib } from "../../lib/posts";
import Layout from "../../components/layout";

export async function getStaticProps() {
  return getStaticPropsLib();
}

export default function Home({ idToData }) {
  console.log(idToData);
  const idList = ["学歴", "職歴", "インターンシップ", "賞", "開発物", "その他"];
  return (
    <Layout isJapanese={true}>
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
