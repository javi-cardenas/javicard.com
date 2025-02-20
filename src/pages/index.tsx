// Step 1: Import React
import * as React from "react";

// Step 2: Define your component with TypeScript types
const IndexPage = (): JSX.Element => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I am making this by following the Gatsby Tutorial.</p>
    </main>
  );
};

// Head component for setting the page title
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
