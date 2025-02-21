import * as React from "react"; // Step 1: Import React
import { SEO } from "../components/seo";
import Layout from "../components/layout";

// Step 2: Define your component with TypeScript types
const IndexPage = (): JSX.Element => {
  return (
    <Layout pageTitle="Home Page">
      <p>I am making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;

// Head component for setting the page title and additional metadata
export const Head = () => <SEO title="Home Page" />;
