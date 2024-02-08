import styled from "styled-components"
import { Theme } from "../../themes"

export const InputStyle = styled.TextInput.attrs({
    placeholderTextColor: '#49B3BA'
})`
width: 100%;
height: 55px;
border-radius: 5px;
border: 2px solid ${Theme.colors.primary};
font-size: 16px;
padding: 16px;


`