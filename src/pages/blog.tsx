import * as React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/layout";
import { graphql, PageProps } from "gatsby";

type BlogData = {
  allFile: {
    nodes: {
      name: string;
    }[];
  };
};

const BlogPage: React.FC<PageProps<BlogData>> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export const Head: React.FC = () => <SEO title="My Blog Posts" />;

export default BlogPage;
