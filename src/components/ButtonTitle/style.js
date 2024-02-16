import styled from "styled-components";
import { Theme } from "../../themes";

export const ButtonTitle = styled.Text`
  color: ${(props) => (!props.color ? Theme.colors.lightWhite : props.color)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  text-transform: uppercase;
  font-family: "MontserratAlternates_700Bold";
`;

export const ButtonTitleGoogle = styled(ButtonTitle)`
  color: ${Theme.colors.secondary};
`;

export const ButtonTitleHome = styled(ButtonTitle)`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 12px;
  text-transform: none;
`;
