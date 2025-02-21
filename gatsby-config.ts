import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Javi Cardenas's Personal Website`,
    description: `Software engineer and casual video game player. This is my digital garden.`,
    author: { name: "Javi Cardenas" },
    image: `/gatsby-icon.png`,
    siteUrl: `https://javicard.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  pathPrefix: "/javicard.com", // GitHub repo name
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`, // Google Analytics
      options: {
        trackingIds: ["G-DVMEV7VN1R"],
        gtagConfig: {
          anonymize_ip: true, // Google Analytics will not store the full IP address, making users slightly more anonymous
          cookie_expires: 0, // Users will not be recognized across multiple visits unless they log in or re-identify themselves
        },
        pluginConfig: {
          head: true, // Places script in <head> for better performance
          respectDNT: true, // Respects "Do Not Track" browser setting
          exclude: ["/preview/**", "/do-not-track/me/too/"], // Exclude specific pages or URL patterns from being tracked
          delayOnRouteUpdate: 0, // No delay in tracking page views
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, // favicon or browser icon
      options: {
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
