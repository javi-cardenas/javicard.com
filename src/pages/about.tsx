import * as React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I am the proud creator of this site, which I built with
        Gatsby.
      </p>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <SEO title="About Me" />;
