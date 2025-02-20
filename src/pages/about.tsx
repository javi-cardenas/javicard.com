import * as React from "react";
import { SEO } from "../components/seo";

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>
        Hi there! I am the proud creator of this site, which I built with
        Gatsby.
      </p>
    </main>
  );
};

export default AboutPage;

export const Head = () => <SEO title="About Me" />;
