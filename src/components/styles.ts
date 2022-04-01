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

export const StyledLink = styled.a`
    color: #463f32;
    text-decoration: none;
    font-size: 1em;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    padding-left: 10px;

    &:hover {
      color: #c7c6c6;
    }

    @media only screen and (max-width: 600px) {
      font-size: 0.8em;
    }
`

export const StyledLinkParagraph = styled.p`
    color: #FFFFFF;
    text-decoration: none;
    font-size: 1em;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;

    &:hover {
      color: #c7c6c6;
    }

    @media only screen and (max-width: 600px) {
      font-size: 0.8em;
    }
`

export const StyledImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #c7c6c6;
    margin-right: 10px;
    font-size: 1em;

    @media only screen and (max-width: 600px) {
      width: 30px;
      height: 30px;
    }
`

export const StyledNftLink = styled.a`
    color: #FFFFFF;
    text-decoration: none;
    font-size: 1em;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;

    &:hover {
      color: #c7c6c6;
    }

    @media only screen and (max-width: 600px) {
      font-size: 0.8em;
    }
`

export const StyledLabel = styled.span`
    font-size: 1em;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    margin-right: 10px;

    @media only screen and (max-width: 600px) {
      font-size: 0.8em;
    }
`

export const Box = styled.div`
  padding-bottom: 2px;
  float: left;
  width: 100%;
`

export const BioBox = styled.div`
  padding-bottom: 2px;
  padding-left: 5vw;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80vw;

  @media only screen and (max-width: 600px) {
    font-size: 0.8em;
    padding-left: 2vw;
    width: 95vw;
  }
`

export const BaseLabel = styled.label`
  color: #FFFFFF;
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`

export const CenterStyled = styled.div`
  align-items: center;
  text-align: center;
`

export const Input = styled.input`
  background-color: #463f32;
  border: 0;
  border-radius: 16px;
  box-shadow: 2px 2px #E4E4E4;
  color: #000000;
  display: block;
  font-size: 16px;
  height: 28px;
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 1px solid #000000;

  &::placeholder {
    color: #E2E2E2;
  }

  &:disabled {
    background-color: #FFFFFF;
    box-shadow: none;
    color: #FFFFFF;
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: #E7E7E7;
  }
`


export const Textarea = styled.textarea`
  background-color: #463f32;
  border: 0;
  border-radius: 16px;
  box-shadow: 2px 2px #E4E4E4;
  color: #000000;
  display: block;
  font-size: 16px;
  height: 150px;
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 1px solid #000000;

  &::placeholder {
    color: #E2E2E2;
  }

  &:disabled {
    background-color: #FFFFFF;
    box-shadow: none;
    color: #FFFFFF;
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: #E7E7E7;
  }
`

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const StyledBigRadioButton = styled.input`
  background-color: #FFFFFF;
  border: 0;
  border-radius: 16px;
  box-shadow: 2px 2px #E4E4E4;
  color: #000000;
  display: block;
  font-size: 16px;
  height: 28px;
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 1px solid #000000;
`

export const StyledSelect = styled.select`
  background-color: #FFFFFF;
  border: 0;
  border-radius: 16px;
  box-shadow: 2px 2px #E4E4E4;
  color: #000000;
  display: block;
  font-size: 16px;
  height: 28px;
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 1px solid #000000;

  &::placeholder {
    color: #E2E2E2;
  }

  &:disabled {
    background-color: #FFFFFF;
    box-shadow: none;
    color: #FFFFFF;
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: #E7E7E7;
  }
`

export const StyledBigSelect = styled(StyledSelect)`
  font-size: 1.5em;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  width: 60%;
  height: 50px;
`

export const StyledButton = styled.button`
  align-items: center;
  border: 1;
  margin-top: 2vh;
  border-radius: 16px;
  box-shadow: 2px 2px #000000;
  border: 1px solid #000000;
  color: #000000;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  height: 24px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;
  margin-left: 1vw;

  &:hover:not(:disabled):not(.plant-button--disabled):not(.plant-button--disabled):not(:active) {
    opacity: 0.65;
  }

  &:active:not(:disabled):not(.plant-button--disabled):not(.plant-button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`

export const Errors = styled.div`
  color: #DC0D00;
  font-size: 16px;
  font-weight:  400;
  line-height: 1.5;
`


export const StyledBox = styled.div`
  flex: 2;
  display: flex;
`

export const StyledBoxNftsList = styled.div`
  flex: 1;
  width: 40%;
`

export const StyledBoxListingDetail = styled.div`
  flex: 2;
  border: 2px solid #c7c6c6;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: 8px;
  padding: 10px;
  width: 60%;
`

export const StyledPriceInput = styled(Input)`
  width: 60%;
  height: 50px;
  margin-left: 10px;
  margin-top: 10px;
  size: 20px;
  font-size: 1.5em;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
`

export const CurrencyLabel = styled.span`
  color: #FFFFFF;
  font-size: 1.5em;
  font-weight: 300;
  font-weight: 600;
  padding: 10px;
`

export const StyledSelectedNft = styled.p`
  border: 2px solid #c7c6c6;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
  margin-bottom: 8px;

  @media only screen and (max-width: 600px) {
    font-size: 1em;
    letter-spacing: 0px;
    padding: 8px;
  }
`

export const StyledRefresh = styled.button`
  background-color: transparent;
  color: #c7c6c6;
  border: 2px solid #c7c6c6;
  border-radius: 10px;
  padding: 10px;
  margin: 1px;
  font-size: 0.5em;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #4e4e4e;
  }   
`

export const StyledDelete = styled.button`
  background-color: transparent;
  color: #c7c6c6;
  border: 2px solid #c7c6c6;
  border-radius: 10px;
  padding: 10px;
  margin: 1px;
  font-size: 0.5em;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #900909;
  }   
`

export const StyledReturnMarket = styled.button`
  background-color: transparent;
  color: #c7c6c6;
  border: 2px solid #c7c6c6;
  border-radius: 10px;
  padding: 10px;
  margin: 1px;
  font-size: 0.5em;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #4e4e4e;
  }
`

export const StyledAllNft = styled.p`
  padding-left: 10px;
  padding-right: 10px;

  @media only screen and (max-width: 600px) {
    font-size: 1em;
    letter-spacing: 0px;
    padding: 8px;
  }
`

export const BigLabel = styled(BaseLabel)`
  font-size: 1.25em;   
  font-weight: 400;
  margin-top: 16px;
  margin-bottom: 8px;
  font-family: 'Roboto', sans-serif;
`

export const StyledBigButton = styled(StyledButton)`
  width: 40%;
  height: 50px;
  margin-top: 16px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1.5em;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
`

export const SoundBasicControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const PlayPauseButton = styled.button`
  background-color: transparent;
  color: #c7c6c6;
  border: 2px solid #c7c6c6;
  border-radius: 10px;
  padding: 10px;
  margin: 1px;
  font-size: 0.5em;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #4e4e4e;
  }
`

export const Radio = styled.input`
  margin-right: 10px;
`

export const BigRadio = styled(Radio)`
  height: 30px;
  width: 30px;
`

export const Checkbox = styled.input`
  margin-right: 10px;
`

export const BigCheckbox = styled(Checkbox)`
  height: 30px;
  width: 30px;
`

export const SoundVolumeControls = styled.button`
  background-color: transparent;
  color: #c7c6c6;
  border: 2px solid #c7c6c6;
  border-radius: 10px;
  padding: 10px;
  margin: 1px;
  font-size: 0.5em;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  outline: none;
  
  &:hover {
      background-color: #4e4e4e;
  }
`