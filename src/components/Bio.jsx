import React from 'react'
import styled from 'styled-components'
import { BaseLabel } from './styles'

const ImageBox = styled.div`
    flex: 1;
    position: relative;
    width: 25vw;
    height: 30vh;
    left: 8vw;

    @media only screen and (max-width: 600px) {
        width: 90vw;
    }
`

const BioContainerBox = styled.div`
    flex: 1;
    position: relative;
    width: 65vw;
    height: 50vh;
    right: 8vw;
    padding-left: 15vw;

    @media only screen and (max-width: 600px) {
        padding-top: 35vh;
        width: 90vw;
        height: 100vh;
    }
`

const Maxime = styled.img`
    margin-right: 16px;
    width: 22vw;
    cursor: pointer;
    left: 2vw;

    @media only screen and (max-width: 600px) {
        width: 90vw;
    }
`

const BioMainBox = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 24px;
    padding-top: 24px;
    padding-left: 2vw;
    padding-right: 2vw;
    margin-left: 10vw;
    margin-right: 10vw;

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Bio = ({
    id
}) => {
    return(
        <BioMainBox id={id}>
            <ImageBox>
                <Maxime src="/images/maxime.jpg" />
            </ImageBox>
            <BioContainerBox>
                <div className="help-title">
                    <h1>Bio</h1>
                </div>
                <div className="help-content">
                        <BaseLabel>
                            I was born in 1989 with a passion for gaming and video games. It’s only later on, near my 30’s that I decided to pursue an artistic instruction here in Montreal/Quebec, specializing in the branch of 3d art and level design.
                        </BaseLabel>
                        <br />
                        <BaseLabel>
                            Before that, I used to work as a mixologist and compete in a few regional and national competitions in cocktail crafting. Those past years in the restoration industries gave me skills and psychological knowledge to push my creative mind and work under pressure. Through these years I have gained experience through various computer software such as Acomba, Excell, Photoshop, etc.
                        </BaseLabel>
                        <br />
                        <BaseLabel>
                            In 2020, I decided to change careers and leave the restaurant business. I now work in the field of video games. I am currently QA at Warner Brother in Montreal.
                        </BaseLabel>
                        <br />
                        <BaseLabel>
                            I am pushing my learnings  in  3d softwares, like 3ds Max, Blender, Zbrush, Unreal Engine, Substance Painter and Marmoset.
                        </BaseLabel>
                        <br />
                        <BaseLabel>
                            No preference for Online or presential work, while relocation is something to be discussed privately.
                        </BaseLabel>
                </div>
            </BioContainerBox>
        </BioMainBox>
    )
}

export default Bio
