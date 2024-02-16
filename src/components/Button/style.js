import styled from "styled-components";
import { Theme } from "../../themes";

export const Button = styled.TouchableOpacity`
width: 100%;
height: 44px;
background-color: ${Theme.colors.secondary};
border: 1px solid ${Theme.colors.secondary};
border-radius: 5px;
/* margin-top: 15px; */
padding: 12px 8px 12px 8px;
align-items: center;
justify-content: center;
`

export const ButtonGoogle = styled(Button)`
background-color: ${Theme.colors.whiteColor};
border: 1px solid ${Theme.colors.secondary};
flex-direction: row;
justify-content: center;
align-items: center;
gap:20px;
`

