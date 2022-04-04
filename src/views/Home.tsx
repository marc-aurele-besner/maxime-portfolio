import React from 'react'
// import { Link } from "react-router-dom";
import styled from 'styled-components'
// import Typewriter from 'typewriter-effect'

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

const Menu = styled.a`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
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

// const StyledTypewriter = styled.div`
//   color: #fff;
//   font-size: 1.5rem;
//   height: 10vh;

//   &:hover {
//     color: #adadad;
//   }
// `

const MenuGrid = styled.div`
  display: grid;
  padding-left: 20px;
  grid-gap: 20px;
  width: 70vw;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 12px;
  padding-top: 12px;
  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const ModelsGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 24px;
  padding-top: 24px;
  transition: all 0.2s ease-in-out;

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

const HeaderImage = styled.div`
  background-image: url('/images/header.jpg');
  position: relative;
  width: 1366px;
  height: 80vh;
`
const SocialMedia = styled.div`
  top: 26vh;
  right: 10vw;
  position: absolute;
  padding: 2px;
  @media only screen and (max-width: 600px) {
    top: 26vh;
    left: 20px;
    right: unset;
  }
`

const SocialMediaLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 1rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  padding: 0px;
  margin: 5px;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`

const Icone = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 0px;
  margin-right: 0px;
  padding: 0px;
`

const Home: React.FC = () => {

  return (
    <StyledHome>
      <Center>
        <br />
        <HeaderImage id="Home">
          <SocialMedia>
            <SocialMediaLink href="https://www.artstation.com/el_peasant">
              <Icone src="images/artStation.png" />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.instagram.com/sublime_peasant">
              <Icone src="images/instagram.png" />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.linkedin.com/in/maxime-lafreniere-5a44a0236/">
              <Icone src="images/linkedin.png" />
            </SocialMediaLink>
          </SocialMedia>
        </HeaderImage>
        <br />
        
        <MenuGrid>
          <Content>
            <Menu href="#Home">
              <StyledTitle>Home</StyledTitle>
            </Menu>
          </Content>
          <Content>
            <Menu href="#Bio">
              <StyledTitle>Bio</StyledTitle>
            </Menu>
          </Content>
          <Content>
            <Menu href="#Gallery">
              <StyledTitle>Gallery</StyledTitle>
            </Menu>
          </Content>
          <Content>
            <Menu href="#Contact">
              <StyledTitle>Contact</StyledTitle>
            </Menu>
          </Content>
        </MenuGrid>
        {/* <StyledTitle>Maxime</StyledTitle>
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
        </StyledTypewriter> */}
        <br />
        <br />
        <ModelsGrid id="Gallery">
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
        <Bio id="Bio" />
        <br />
        <br />
        <ContactUs id="Contact" />
        <br />
        <br />
      </Center>
    </StyledHome>
  )
}

export default Home
