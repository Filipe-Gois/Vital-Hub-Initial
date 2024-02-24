import styled from "styled-components";
import { Theme } from "../../themes";

export const InputStyle = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.placeholderTextColor
    ? props.placeholderTextColor
    : "#49B3BA",
}))`
  width: ${(props) => ` ${props.fieldWidth}%`};
  max-width: ${(props) => ` ${props.fieldMaxWidth}%`};
  height: ${(props) => ` ${props.fieldHeight}px`};
  color: ${Theme.colors.primary};
  border-radius: 5px;
  border: ${(props) =>
    props.border ? props.border : `2px solid ${Theme.colors.primary}`};
  background-color: ${(props) =>
    props.backGround ? props.backGround : Theme.colors.whiteColor};
  font-size: 16px;
  padding: 16px;
`;

export const InputVerification = styled(InputStyle)`
  width: 65px;
  height: 62px;
`;

export const InputMedicalRecord = styled(InputStyle)`
  width: 100%;
  height: 121px;
`;

export const InputCheckEmailStyle = styled(InputStyle)`
  text-align: center;
  font-size: 40px;
  padding: 5px 10px;
`;

export const InputSelectBox = styled.View`
  width: 100%;
  height: 55px;
  border: 2px solid ${Theme.colors.primary};
  border-radius: 5px;
`;
