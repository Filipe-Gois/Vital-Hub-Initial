import styled from "styled-components";
import { Theme } from "../../themes";

export const ButtonTitle = styled.Text`
color: ${Theme.colors.whiteColor};
font-size: 14px;
text-transform: uppercase;
font-family: "MontserratAlternates_700Bold";

`

export const ButtonTitleGoogle = styled(ButtonTitle)`
color: ${Theme.colors.secondary};
`