import * as React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const BlogPage = () => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => <SEO title="My Blog Posts" />;
