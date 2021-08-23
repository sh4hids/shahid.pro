import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Text } from '@sh4hids/gatsby-theme-open-sourcerer/src/components';
import { DefaultLayout } from '@sh4hids/gatsby-theme-open-sourcerer/src/layouts';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            summary
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata || {};
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const experience = new Date().getFullYear() - 2018;
  return (
    <DefaultLayout
      title="About"
      description={author.summary || ''}
      url="/about/"
    >
      <Text variant="h2">Childhood & Education</Text>
      <Text>
        I was born in a small town called Feni in Bangladesh. I grew up and
        completed my early education there. After that, I moved to Dhaka for
        higher education. I completed my Bachelor of Science in Computer Science
        and Engineering from BRAC University.
      </Text>
      <Text variant="h2">Work Experience</Text>
      <Text>
        I started working part-time during the last year of my graduation. I
        worked as UI/UX designer on my first job (which helps me build up my
        basic UI/UX knowledge). Then I worked as a JavaScript developer for a
        short time in e small startup and developed a desktop app using
        Electron.
      </Text>
      <Text>
        I started working full-time after completing my graduation. Since then,
        I have worked for several companies in different fields in different
        positions. So far, I have worked on social networking platforms for
        businesses, freelancing platforms, and lead generation tools.
      </Text>
      <Text variant="h2">Technical Experties</Text>
      <Text>
        I have been writing JavaScript for about{' '}
        {experience < 10 ? numbers[experience] : experience} and a half years. I
        have written API services with Express, Koa, MongoDB, MySQL, and
        DynamoDB. For client apps, I used React, Redux, After.js, Next.js,
        Gatsby, Styled Components, MaterialUI, etc.
      </Text>
      <Text>
        I also worked on AWS infrastructure, especially with Elastic Beanstalk,
        Lambda, API Gateway, SQS, DynamoDB, Cloudwatch, Codebuild.
      </Text>
      <Text variant="h2">Hobbies & Other Activities</Text>
      <Text>
        I like to spend my free time with my family (that's why my future goal
        is to join a fully remote team). My favorite hobby is gardening, and I
        also like to keep pets. I have a rooftop garden. Every day I spend some
        time in the morning and evening in my garden. You can see glimpses of my
        garden <a href="/gallery/">here</a>.
      </Text>
    </DefaultLayout>
  );
};

export default About;
