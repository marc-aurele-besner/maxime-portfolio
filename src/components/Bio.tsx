import React from 'react'
import { BioBox, BaseLabel } from './styles'

const Bio = () => {
    return(
        <>
            <div className="help-title">
                <h1>Bio</h1>
            </div>
            <div className="help-content">
                <BioBox>
                    <BaseLabel>
                        I was born in 1989 with a passion for gaming and video games. It’s only later on, near my 30’s that I decided to pursue an artistic instruction here in Montreal/Quebec, specializing in the branch of 3d art and level design.
                    </BaseLabel>
                    <br />
                    <BaseLabel>
                        Before that, I used to work as a mixologist and compete in a few regional and national competitions in cocktail crafting. Those past years in the restoration industries gave me skills and psychological knowledge to push my creative mind and work under pressure. Through these years I have gained experience through various computer software such as Acomba, Excell, Photoshop, etc.
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
                </BioBox>
            </div>
        </>
    )
}

export default Bio
