import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ImageGrid } from '../components';

import { Text } from '@sh4hids/gatsby-theme-open-sourcerer/src/components';
import { DefaultLayout } from '@sh4hids/gatsby-theme-open-sourcerer/src/layouts';

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFlowersJson {
        nodes {
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          id
          name
        }
      }
    }
  `);

  const { nodes: flowers } = data.allFlowersJson || {};

  return (
    <DefaultLayout title="Gallery" description="" url="/gallery/">
      <Text variant="h2">My Flower Collection</Text>
      <ImageGrid images={flowers} />
    </DefaultLayout>
  );
};

export default Gallery;
