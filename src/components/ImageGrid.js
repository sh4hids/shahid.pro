import React, { useState } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import Img from 'gatsby-image';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
} from '@sh4hids/gatsby-theme-open-sourcerer/src/components';

const Wrapper = styled.div`
  .image-gallery-grid {
    display: flex;
    margin-left: -16px;
    width: auto;
  }
  .image-gallery-grid_column {
    padding-left: 16px;
    background-clip: padding-box;
  }

  /* Style your items */
  .image-gallery-grid_column > div {
    background: grey;
    margin-bottom: 16px;
    box-shadow: ${({ theme }) => theme.elevations[0]};
    border-radius: 8px;
    transition: all ease-in-out 0.3s;

    .gatsby-image-wrapper {
      border-radius: 8px;
    }

    :hover {
      box-shadow: ${({ theme }) => theme.elevations[2]};
    }
  }
`;

const ImageButton = styled.div`
  cursor: pointer;
`;

const LightboxDialog = styled(DialogOverlay)`
  background-color: rgba(0, 0, 0, 0.8);

  .image-lightbox-content {
    background-color: transparent;
    position: relative;
    width: 100%;
    max-width: 720px;

    button {
      cursor: pointer;
      background-color: transparent;
      outline: none;
      border: none;
      color: ${({ theme }) => theme.colors.dark[1]};
      width: 32px;
      height: 32px;
    }

    .close-button {
      position: absolute;
      top: 16px;
      right: 16px;
      color: ${({ theme }) => theme.colors.text1};
      background-color: ${({ theme }) => theme.colors.bg1};
      border-radius: 50%;
      width: 32px;
      height: 32px;
      font-weight: bold;
    }

    .control-wrapper {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      color: ${({ theme }) => theme.colors.light[1]};

      p {
        margin: 0;
        display: inline-block;
        text-align: center;
        width: 100%;
      }

      button {
        color: ${({ theme }) => theme.colors.text1};
        background-color: ${({ theme }) => theme.colors.bg1};
        border-radius: 50%;
        position: absolute;
        top: 42%;

        &.prev-button {
          left: 16px;
        }

        &.next-button {
          right: 16px;
        }

        ${({ theme }) => `${theme.mediaQueries.sm} { 
          top: 48%;
          transform: translateY(-50%);
        }`};
      }
    }
  }
`;

const ImageGrid = ({ images = [] }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <Wrapper>
        <Masonry
          breakpointCols={{
            default: 2,
            1100: 2,
            700: 2,
            500: 1,
          }}
          className="image-gallery-grid"
          columnClassName="image-gallery-grid_column"
        >
          {images.map(({ id, name, image }, index) => (
            <ImageButton
              key={id}
              onClick={() => {
                setCurrentImage(index);
                setShowLightbox(true);
              }}
            >
              <Img alt={name} fluid={image.childImageSharp.fluid} />
            </ImageButton>
          ))}
        </Masonry>
      </Wrapper>
      <LightboxDialog
        className="image-lightbox"
        isOpen={showLightbox}
        onDismiss={() => setShowLightbox(false)}
      >
        <DialogContent
          className="image-lightbox-content"
          aria-label="lightbox-content"
        >
          <Img fluid={images[currentImage].image.childImageSharp.fluid} />

          <button
            type="button"
            className="close-button"
            onClick={() => setShowLightbox(false)}
          >
            x
          </button>
          <div className="control-wrapper">
            <button
              type="button"
              className="prev-button"
              onClick={() =>
                setCurrentImage((currentImage - 1) % images.length)
              }
            >
              <ArrowLeftIcon />
            </button>
            <p>{images[currentImage].name}</p>
            <button
              className="next-button"
              type="button"
              onClick={() =>
                setCurrentImage((currentImage + 1) % images.length)
              }
            >
              <ArrowRightIcon />
            </button>
          </div>
        </DialogContent>
      </LightboxDialog>
    </>
  );
};

export default ImageGrid;
