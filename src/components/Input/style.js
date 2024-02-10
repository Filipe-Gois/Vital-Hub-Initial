import styled from "styled-components"
import { Theme } from "../../themes"

export const InputStyle = styled.TextInput.attrs({
    placeholderTextColor: '#49B3BA',

})`
width: ${props => ` ${props.fieldWidth}%`};
height: ${props => ` ${props.fieldHeight}px`};

border-radius: 5px;
border: 2px solid ${Theme.colors.primary};
font-size: 16px;
padding: 16px;
`

export const InputVerification = styled(InputStyle)`
width: 65px;
height: 62px;
`

export const InputMedicalRecord = styled(InputStyle)`
width: 100%;
height: 121px;
`