import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Text } from '@sh4hids/gatsby-theme-open-sourcerer/src/components';
import { DefaultLayout } from '@sh4hids/gatsby-theme-open-sourcerer/src/layouts';

const About = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         author {
  //           summary
  //         }
  //       }
  //     }
  //   }
  // `);

  // const { author } = data.site.siteMetadata || {};

  return (
    <DefaultLayout title="Gallery" description="" url="/gallery/">
      <Text variant="h2">My Flower Collection</Text>
      <Text>coming soon...</Text>
    </DefaultLayout>
  );
};

export default About;
