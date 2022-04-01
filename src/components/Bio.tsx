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
                        Born with a passion for video games, I pursued an artistic instruction here in Montreal/Quebec, specializing in the branch of 3d art and level design.
                    </BaseLabel>
                    <br />
                    <BaseLabel>
                        Before that, I used to work as a mixologist and compete in a few regional and national competitions in cocktail crafting. Those past years in the restoration industries gave me skills and psychological knowledge to push my creative mind and work under pressure.
                    </BaseLabel>
                    <br />
                    <BaseLabel>
                        Professionally speaking I work in the fields of 3d artist, loving accessories modeling, environment and design.
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