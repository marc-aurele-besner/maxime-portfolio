import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

import Gallery3D from '../components/Gallery3D'

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  height: 90vh;
  overflow:scroll;
  overflow-x:hidden;
`
const StyledTitle = styled.h1`
  margin-top: 2vh;
  color: #fff;
  font-size: 2rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`
/*
const StyledImagePreview = styled.img`
  align-items: center;
  width: 70%;
  border-radius: 10px;
  border: 2px solid #fff;
  cursor: pointer;

  &:hover {
    border: 2px solid #adadad;
    opacity: 0.7 !important;
    filter: alpha(opacity=70) !important;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`
*/


const StyledGalleryPreview = styled.div`
  align-items: center;
  width: 60vw;
  margin-top: 6vh;
  cursor: pointer;
`

const Center = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(80vh - 30px);
  justify-content: center;
`

const StyledLinkVisitGallery = styled(Link)`
  color: #fff;
  font-size: 1.5rem;

  &:hover {
    color: #adadad;
  }
`

const StyledTypewriter = styled.div`
  color: #fff;
  font-size: 1.5rem;
  height: 10vh;

  &:hover {
    color: #adadad;
  }
`

const Home: React.FC = () => {

  return (
    <StyledHome>
      <Center>
        <br />
        <br />
        <StyledTitle>Maxime</StyledTitle>
        <StyledTypewriter>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Bonjour, voici mon portfolio.')
                .pauseFor(300)
                .deleteAll()
                .typeString('Je vais rajouter plus de models bientôt.')
                .pauseFor(300)
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </StyledTypewriter>
        <br />
        <br />
        <StyledGalleryPreview>
          <Gallery3D idEmbeded={true} />
        </StyledGalleryPreview>
        <br />
        <br />
        <StyledLinkVisitGallery to="/gallery">Visit the gallery</StyledLinkVisitGallery>
        <br />
      </Center>
    </StyledHome>
  )
}

export default Home
