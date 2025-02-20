import * as React from "react"; // Step 1: Import React
import { SEO } from "../components/seo";

// Step 2: Define your component with TypeScript types
const IndexPage = (): JSX.Element => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I am making this by following the Gatsby Tutorial!</p>
    </main>
  );
};

// Step 3: Export your component
export default IndexPage;

// Head component for setting the page title and additional metadata
export const Head = () => <SEO />;
