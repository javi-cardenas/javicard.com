import { graphql, useStaticQuery } from "gatsby";

type SiteMetadata = {
  title: string;
  description: string;
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
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
