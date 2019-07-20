import React from 'react';
import styled from 'styled-components';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';

const SocialShareContainer = styled.div`
  text-align: center;
  padding: 12px 0;
`;

const SocialShareButtonContainer = styled.div`
  vertical-align: top;
  display: inline-block;
  margin-right: 15px;
  text-align: center;

  .social-share-button {
    cursor: pointer;
    outline: none;
  }
`;

const SocialShareSection = ({ title, url, hashtags }) => (
  <SocialShareContainer>
    <SocialShareButtonContainer>
      <FacebookShareButton
        className="social-share-button"
        url={url}
        hashtags={hashtags}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </SocialShareButtonContainer>
    <SocialShareButtonContainer>
      <TwitterShareButton
        className="social-share-button"
        title={title}
        url={url}
        hashtags={hashtags}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </SocialShareButtonContainer>
    <SocialShareButtonContainer>
      <RedditShareButton
        className="social-share-button"
        title={title}
        url={url}
        hashtags={hashtags}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
    </SocialShareButtonContainer>
    <SocialShareButtonContainer>
      <LinkedinShareButton
        className="social-share-button"
        title={title}
        url={url}
        hashtags={hashtags}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </SocialShareButtonContainer>
    <SocialShareButtonContainer>
      <EmailShareButton
        className="social-share-button"
        title={title}
        url={url}
        hashtags={hashtags}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </SocialShareButtonContainer>
  </SocialShareContainer>
);

export default SocialShareSection;
