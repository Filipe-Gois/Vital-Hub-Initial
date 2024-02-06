import styled from "styled-components"
import { Theme } from "../../themes"

// export const InputStyle = styled.TextInput`
// width: 90%;
// height: 55px;
// border-radius: 5px;
// border: 1px solid ${Theme.colors.whiteColor};
// font-size: 16px;
// padding: 16px;


// `
export const InputStyle = styled.TextInput.attrs({
    placeholderTextColor: '#34898f'
})`
width: 90%;
height: 55px;
border-radius: 5px;
border: 1px solid ${Theme.colors.whiteColor};
font-size: 16px;
padding: 16px;


`