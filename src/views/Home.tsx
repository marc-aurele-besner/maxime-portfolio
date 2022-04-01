import React from 'react'
// import { Link } from "react-router-dom";
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

import Bio from '../components/Bio'
import ContactUs from '../components/ContactUs'

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
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

const Center = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

// const StyledLinkVisitGallery = styled(Link)`
//   color: #fff;
//   font-size: 1.5rem;

//   &:hover {
//     color: #adadad;
//   }
// `

const StyledTypewriter = styled.div`
  color: #fff;
  font-size: 1.5rem;
  height: 10vh;

  &:hover {
    color: #adadad;
  }
`

const ModelsGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 24px;
  padding-top: 24px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Image = styled.img`
  margin-right: 16px;
  width: 30vw;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`

const Content = styled.div`
  flex: 1;
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
                .typeString('Welcome to my portfolio.')
                .pauseFor(300)
                .deleteAll()
                .typeString('Click on the models to see them in 3d.')
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
        <ModelsGrid>
          <Content>
            <Image src='/images/Gonk.png' alt='Gonk' onClick={() => window.open('/gallery/Gonk')} />
          </Content>
          {/* <Content>
            <Image src='/images/Gunblade.png' alt='GunbladeScene' onClick={() => window.open('/gallery/GunbladeScene')} />
          </Content> */}
          <Content>
            <Image src='/images/Desk.png' alt='Desk' onClick={() => window.open('/gallery/Desk')} />
          </Content>
          <Content>
            <Image src='/images/Speeder.png' alt='Desk' onClick={() => window.open('/gallery/Speeder')} />
          </Content>
          {/* <Content>
            <Image src='/images/Gunblade2.png' alt='Gunblade' onClick={() => window.open('/gallery/Gunblade')} />
          </Content> */}
        </ModelsGrid>
        <br />
        <br />
        <Bio />
        <br />
        <br />
        <ContactUs />
        <br />
        <br />
      </Center>
    </StyledHome>
  )
}

export default Home
