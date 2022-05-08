import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Footer from "./Footer";
import Link from "next/link";

import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const name = "Sosuke Nishikawa";
export const siteTitle = "Sosuke Nishikawa (西川荘介)";
export const siteTitle_ja = "西川荘介 (Sosuke Nishikawa)";

export default function Layout({ children }) {
  return (
    <>
      {/* TODO navbar */}
      <div className={styles.container}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
        </Head>
        {children}
      </div>
      <Footer />
    </>
  );
}

// export default function Layout({ children, home }) {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <link rel="icon" href="/favicon.ico" />
//         <meta
//           name="description"
//           content="Learn how to build a personal website using Next.js"
//         />
//         <meta
//           property="og:image"
//           content={`https://og-image.vercel.app/${encodeURI(
//             siteTitle
//           )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
//         />
//         <meta name="og:title" content={siteTitle} />
//         <meta name="twitter:card" content="summary_large_image" />
//       </Head>

//       <header className={styles.header}>
//         {home ? (
//           <div className={utilStyles.profile}>
//             <div>
//               <Image
//                 priority
//                 src="/images/profile.jpg"
//                 className={utilStyles.borderCircle}
//                 height={200}
//                 width={200}
//                 alt={name}
//                 layout={"responsive"}
//               />

//               <br />

//               {/* SNS Links */}
//               <div
//                 className={`${utilStyles.paddingLeft} ${utilStyles.paddingRight}`}
//               >
//                 <a
//                   href="https://twitter.com/ponyo_ponyo115"
//                   className={styles.forceBlack}
//                 >
//                   <IconContext.Provider
//                     value={{
//                       style: {
//                         fontSize: "2.5rem",
//                       },
//                     }}
//                   >
//                     <FaTwitter />
//                   </IconContext.Provider>
//                 </a>

//                 <a
//                   href="https://github.com/Sosuke115"
//                   className={styles.forceBlack}
//                 >
//                   <IconContext.Provider
//                     value={{
//                       style: {
//                         fontSize: "2.5rem",
//                       },
//                     }}
//                   >
//                     <FaGithub />
//                   </IconContext.Provider>
//                 </a>

//                 <a
//                   href="https://www.linkedin.com/in/sosuke-nishikawa-2100581a0/"
//                   className={styles.forceBlack}
//                 >
//                   <IconContext.Provider
//                     value={{
//                       style: {
//                         fontSize: "2.5rem",
//                       },
//                     }}
//                   >
//                     <FaLinkedin />
//                   </IconContext.Provider>
//                 </a>
//               </div>
//             </div>

//             <div className={utilStyles.profileText}>
//               <h1 className={utilStyles.heading2Xl}>{name}</h1>
//               <div>
//                 ML/Software Engineer,{" "}
//                 <Link href="https://about.yahoo.co.jp/">
//                   Yahoo Japan Corporation
//                 </Link>
//               </div>

//               <div>
//                 Bachelor of Engineering,{" "}
//                 <a href="https://www.ee.t.u-tokyo.ac.jp/j/">
//                   The University of Tokyo
//                 </a>
//                 , 2020
//               </div>
//               <div>
//                 Master of Information Science and Technology,{" "}
//                 <a href="https://www.i.u-tokyo.ac.jp/index_e.shtml">
//                   The University of Tokyo
//                 </a>
//                 , 2022
//               </div>

//               {/* <FaTwitter /> */}

//               {/* <Link href="https://twitter.com/ponyo_ponyo115">
//                 <a className={utilStyles.paddingLeft}>ponyo_ponyo115</a>
//               </Link> */}

//               {/* <br /> */}

//               <div>
//                 <a href="https://sosuke115.github.io/">Here</a> is the portfolio
//                 in my student days.
//               </div>
//               <Link href={`/index_ja`}>
//                 <a>日本語のページはコチラ</a>
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <>
//             <Link href="/">
//               <a>
//                 <Image
//                   priority
//                   src="/images/profile.jpg"
//                   className={utilStyles.borderCircle}
//                   height={208}
//                   width={208}
//                   alt={name}
//                 />
//               </a>
//             </Link>
//             <h2 className={utilStyles.headingLg}>
//               <Link href="/">
//                 <a className={utilStyles.colorInherit}>{name}</a>
//               </Link>
//             </h2>
//           </>
//         )}
//       </header>
//       <main>{children}</main>
//       {!home && (
//         <div className={styles.backToHome}>
//           <Link href="/">
//             <a>← Back to home</a>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }
