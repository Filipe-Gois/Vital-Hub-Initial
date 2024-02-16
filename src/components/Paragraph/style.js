import styled from "styled-components";
import { Theme } from "../../themes";

export const TextCreateAccount1 = styled.Text`
  color: ${(props) => (!props.color ? Theme.colors.grayV2 : props.color)};
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 16px;
`;

export const TextCreateAccount2 = styled(TextCreateAccount1)`
  text-decoration: underline;
  color: ${Theme.colors.secondary};
`;

export const Paragraph = styled(TextCreateAccount1)`
  text-align: ${props => !props.textAlign ? "center" : props.textAlign};
  color: ${Theme.colors.grayV3};
  font-family: "Quicksand_500Medium";
  font-size: 16px;
`;

export const ParagraphSemiBold = styled(Paragraph)`
  font-family: "Quicksand_600SemiBold";
  text-align: left;
`;

export const UserEmailText = styled(Paragraph)`
  color: ${Theme.colors.secondary};
`;
