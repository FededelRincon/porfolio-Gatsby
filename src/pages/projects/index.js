import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";




export default function Proyects({ data }) {


    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;
    // console.log(projects)
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've created</h3>
                <div className={styles.projects}>
                    {projects.map(project => (
                        <Link 
                            to={"/projects/" + project.frontmatter.slug} 
                            key={project.id}
                        >
                            <div>
                                <GatsbyImage image={getImage(project.frontmatter.thumbImg.childrenImageSharp[0].gatsbyImageData)} alt="Projects" />

                                <h3>{ project.frontmatter.title }</h3>
                                <p> { project.frontmatter.stack } </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Like what you see? Email at { contact } for a quote!</p>
            </div>
        </Layout>
    )
}





// export page query
export const query = graphql `
    query projectsPage {
        projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                id
                frontmatter {
                    slug
                    stack
                    title
                    thumbImg {
                        id
                        childrenImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }

        contact: site {
            siteMetadata {
                contact
            }
        }
    }
  
  
`;


// // export page query
// export const query = graphql `
//     query projectsPage {
//         projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
//             nodes {
//                 frontmatter {
//                     slug
//                     stack
//                     title
//                 }
//                 id
//             }
//         }

//         contact: site {
//             siteMetadata {
//                 contact
//             }
//         }
//     }
// `;
// // console.log(query)   //no se muestra asi... se pasa como prop data y se muestra ahi, sino usar el useStaticQuery
