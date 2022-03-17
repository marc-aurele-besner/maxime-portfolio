import styled from 'styled-components'

export const StyledHelp = styled.div`
    position: absolute;
    border: 2px solid #c7c6c6;
    background: linear-gradient(139.73deg, #4e4e4e 0%, #121212 100%);
    border-radius: 10px;
    top: 2vh;
    left: 4vw;
    right: 4vw;
    font-size: 2em;
    font-weight: 200;
    font-variant-numeric: tabular-nums;
    letter-spacing: -2px;
    background-color: black;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    height: 90vh;
    overflow:scroll;
    overflow-x:hidden;

    @media only screen and (max-width: 600px) {
      font-size: 1em;
      letter-spacing: 0px;
      padding: 8px;
    }
`