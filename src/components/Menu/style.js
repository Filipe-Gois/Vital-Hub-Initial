import styled from "styled-components";
import { Theme } from "../../themes";

export const MenuStyle = styled.View`
  width: 100vw;
  height: 60px;
  background-color: ${Theme.colors.whiteColor};
  flex-direction: row;
  justify-content: space-between;

  box-shadow: 0 -1px 10px #000;

  /* box-shadow para android */
  shadow-color: "black";
  shadow-opacity: 0.08;
  shadow-offset: 0px -1px;
  shadow-radius: 10px;
  elevation: 15;
`;

export const IconWindowBox = styled.View`
  width: 30px;
  height: 30px;
`;

export const TextWindowBox = styled.Text`
  font-size: 12px;
  color: ${Theme.colors.grayV2};
  font-family: "Quicksand_500Medium";
`;
