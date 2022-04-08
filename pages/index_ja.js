// import Head from "next/head";
// import Layout, { siteTitleJa } from "../components/layout";
// import utilStyles from "../styles/utils.module.css";
// import { getSortedPostsData } from "../lib/posts";
// import Link from 'next/link'
// import Date from '../components/date'

// export async function getStaticProps() {
//   const allPostsData = await getSortedPostsData()
//   const idToData = {};

//   allPostsData.forEach((data) => {
//     idToData[data["id"]] = data["id"]
//   })


//   // const allPostsData = test()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

// export default function Home( {allPostsData} ) {

//   console.log(allPostsData);
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitleJa}</title>
//       </Head>

//       {/* リンク */}

//       {/* 自己紹介 */}
//       <section className={utilStyles.headingMd}>
//         <p>Your Self Introduction</p>
//         <p>
//           (This is a sample website - you'll be building a site like this on{" "}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>

//       {/* 職歴 */}
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>職歴</h2>

//         {/* <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} /> */}
      
//       </section>

//       {/* 著作 */}

//       {/* 受賞 */}
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>職歴</h2>
      
//       </section>

//       {/* 受賞 */}

//       {/* 開発物 */}

//       {/* TODO 画像で見せたい */}

      

//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(( {id, date, title}) => (
//             <li className={utilStyles.listItem} key={id}>
//               <Link href={`/posts/${id}`}>
//                <a>{title}</a>
//               </Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   );
// }
