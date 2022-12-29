import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { getStaticPropsLib } from "../../lib/posts";
import Profile from "../../components/profile";
import Layout from "../../components/layout";

export async function getStaticProps() {
  return getStaticPropsLib();
}

export default function Home({ idToData }) {
  return (
    <Layout>
      <Head>
        <title>Sosuke Nishikawa's Portfolio</title>
      </Head>
      <Profile name="Sosuke Nishikawa"/>
    </Layout>
  );
}
