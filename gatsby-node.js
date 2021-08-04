// // const path = require(`path`);

// exports.createPages = async ({ graphql, actions }) => {

//   const { data } = await graphql(`
//     query Articles {
//       allMarkdownRemark {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }
//     }
//   `);
//   console.log(data)

//   data.allMarkdownRemark.nodes.forEach(node => {
//     actions.createPage({
//       path: '/projects/'+ node.frontmatter.slug,
//       component: require.resolve('./src/templates/ProjectDetails.js'),
//       context: { 
//           slug: node.frontmatter.slug 
//       }
//     })
//   })

// }


exports.createPages = async ({ actions, graphql, reporter }) => {

    const resultado = await graphql(`
        query Articles{
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);

    // console.log(resultado)

    if(resultado.errors){
        reporter.panic('No hubo resultado ', resultado.errors);
    }

    //Si hay paginas crear los archivos
    const projects = resultado.data.allMarkdownRemark.nodes;

    projects.forEach(node => {
        actions.createPage({
            path: '/projects/'+ node.frontmatter.slug,
            component: require.resolve('./src/templates/ProjectDetails.js'),
            context: {
                slug: node.frontmatter.slug
            }
        })
    });
}