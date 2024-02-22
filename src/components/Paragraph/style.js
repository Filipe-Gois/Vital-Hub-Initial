import styled from "styled-components";
import { Theme } from "../../themes";

export const TextCreateAccount1 = styled.Text`
  color: ${(props) => (!props.color ? Theme.colors.grayV2 : props.color)};
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 16px;
`;
export const ParagraphMA500 = styled.Text`
  color: ${(props) => (!props.color ? Theme.colors.grayV2 : props.color)};
  font-family: "MontserratAlternates_500Medium";
  font-size: 12px;
`;

export const TextCreateAccount2 = styled(TextCreateAccount1)`
  text-decoration: underline;
  color: ${Theme.colors.grayBlue};
`;

export const Paragraph = styled(TextCreateAccount1)`
  text-align: ${(props) => (!props.textAlign ? "center" : props.textAlign)};
  color: ${(props) =>
    !props.colorText ? Theme.colors.grayV3 : props.colorText};
  font-family: "Quicksand_500Medium";
  font-size: 14px;
`;
export const ParagraphRegular = styled(Paragraph)`
  font-family: "Quicksand_400Regular";
`;

export const ParagraphSemiBold = styled(Paragraph)`
  font-family: "Quicksand_600SemiBold";
  text-align: left;
  /* color: ${(props) => (props.color ? props.color : null)}; */
`;

export const UserEmailText = styled(Paragraph)`
  color: ${Theme.colors.secondary};
`;
