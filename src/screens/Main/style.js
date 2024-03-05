import styled from "styled-components";
import { Theme } from "../../themes";

export const MainContentIcon = styled.View.attrs({
  focus: true,
})`
  flex-direction: ${(props) =>
    props.fieldFlexDirection ? props.fieldFlexDirection : "row"};
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-radius: 18px;
  padding: 9px 12px;
  background-color: ${(props) => props.tabBarActiveBackgroundColor};
`;

export const TextIcon = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_500Medium";
  color: ${(props) => props.colorText};
`;
