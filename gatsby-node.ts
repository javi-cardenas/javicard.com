import { GatsbyNode } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;
    createTypes(`
    type SiteSiteMetadata {
      title: String
      description: String
      author: Author
      image: String
      siteUrl: String
    }
    type Author {
      name: String
    }
  `);
  };
