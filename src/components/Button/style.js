import styled, { css } from "styled-components";
import { Theme } from "../../themes";

export const Button = styled.TouchableOpacity`
  width: ${(props) => (props.fieldWidth ? props.fieldWidth : "100%")};
  height: ${(props) => (props.fieldHeight ? props.fieldHeight : "44px")};
  background-color: ${(props) =>
    !props.buttonStatus ? Theme.colors.whiteColor : Theme.colors.secondary};
  border: 1px solid ${Theme.colors.secondary};
  border-radius: 5px;
  /* margin-top: 15px; */
  padding: ${(props) => (props.padding ? props.padding : "12px 8px 12px 8px")};
  align-items: center;
  justify-content: center;
`;

export const ButtonGoogle = styled(Button)`
  background-color: ${Theme.colors.whiteColor};
  border: 1px solid ${Theme.colors.secondary};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ButtonTabStyle = styled.TouchableHighlight`
  padding: ${(props) =>
    props.padding ? props.padding : "12px 14px 12px 14px"};
  border-radius: 5px;

  width: ${props => props.fieldWidth ? props.fieldWidth : "auto"};

  ${(props) =>
    props.clickButton
      ? css`
          background-color: ${Theme.colors.secondary};
        `
      : css`
          background-color: ${Theme.colors.lightWhite};
          border: ${Theme.colors.secondary};
        `}
`;
