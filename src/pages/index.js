import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

import * as styles from '../styles/home.module.css';
// import { header, btn } from "../styles/home.module.css"

export default function Home() {

  return (
    <>
      <Layout>
        <section className={styles.header}>
          <div className={styles.container}>
            <h2>Design</h2>
            <h3>Develop & Deploy</h3>
            <p>UX designer & web developer</p>
            <Link className={styles.btn} to="/projects">My Portfolio</Link>
          </div>
          <StaticImage src="../images/banner.png" alt="Banner" />

          {/* if you want use an image from web*/}
          {/* <StaticImage src="https://i.blogs.es/594843/chrome/1366_2000.jpg" alt="Banner2" /> */}
        </section>
      </Layout>
    </>
  )
}


// export const query = graphql(`
// query Banner {
//   imageSharp {
//     fluid {
//       srcSetWebp
//     }
//   }
// }

// `);

  // const query = useStaticQuery(graphql`
  // query Banner {
  //   file(relativePath: {eq: "banner.png"}) {
  //     id
  //     childrenImageSharp {
  //       gatsbyImageData(
  //         layout: FULL_WIDTH
  //         placeholder: BLURRED
  //         formats: [AUTO, WEBP]
  //       )
  //     }
  //   }
  // }
  
  
  // `);
  // console.log(query);




//si extraigo una query desde una page...

  //tengo la busqueda 
        // export const query = graphql`
        //   query SiteInfo {
        //     site {
        //       siteMetadata {
        //         description
        //         title
        //       }
        //     }
        //   }
        // `;

  //pongo el props: {data}
  
  //desestructuro:  const { title, description } = data.site.siteMetadata

  // utilizo en algun lado:   <p> { title } - { description } </p> 

