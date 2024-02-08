import styled from "styled-components";
import { Theme } from "../../themes";

export const TextCreateAccount1 = styled.Text`
color: ${Theme.colors.grayV2};
font-family: 'MontserratAlternates_600SemiBold';
`

export const TextCreateAccount2 = styled(TextCreateAccount1)`
text-decoration: underline;
color: ${Theme.colors.secondary};
`

export const Paragraph = styled(TextCreateAccount1)`
text-align: center;
color: ${Theme.colors.grayV3};
font-family: 'Quicksand_500Medium';
font-size: 16px;
`

export const UserEmailText = styled(Paragraph)`
color: ${Theme.colors.secondary};
`