import { graphql, useStaticQuery } from "gatsby";

type SiteMetadata = {
  title: string;
  description: string;
  author: { name: string };
  image: string;
  siteUrl: string;
};

export const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery<{
    site: {
      siteMetadata: SiteMetadata;
    };
  }>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            name
          }
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
