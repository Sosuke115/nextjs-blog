import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { getStaticPropsLib } from "../../lib/posts";
import Profile from "../../components/profile";
import Layout, { siteTitle } from "../../components/layout";

export async function getStaticProps() {
  return getStaticPropsLib();
}

export default function Home({ idToData }) {
  return (
    <Layout>
      <Head>
        <title>西川荘介のポートフォリオ</title>
      </Head>
      <Profile name="西川 荘介" />   
    </Layout>
  );
}
