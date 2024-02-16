import styled from "styled-components";
import { Theme } from "../../themes";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${Theme.colors.lightWhite};
`;

export const ContainerBoxStyle = styled.View`
  display: flex;
  flex-direction: ${(props) => props.fieldDirection};
  justify-content: ${(props) => props.fieldJustifyContent};
  align-items: ${(props) => props.fieldAlignItems};
  width: 100%;
  height: max-content;
  margin: ${(props) => (props.fieldMargin ? props.fieldMargin : "0")};
  gap: ${(props) => (props.fieldGap ? props.fieldGap : "0")};
`;

export const MainContentScroll = styled.ScrollView`
  width: 100%;
  background-color: ${Theme.colors.lightWhite};
`;

export const MainContent = styled.View`
  background-color: ${Theme.colors.lightWhite};
  width: 100%;
  height: 100%;
  margin: 0 0 30px 0;
  align-items: center;
  background-color: ${Theme.colors.lightWhite};
`;

export const ContainerText = styled(MainContent)`
  height: max-content;
`;

export const FormBox = styled.View`
  width: 90%;
  max-height: 100%;
  align-items: center;
  gap: 20px;
`;

export const InputBox = styled(FormBox)`
  width: 100%;
`;

export const InputBoxCheckEmail = styled(InputBox)`
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonBox = styled(FormBox)`
  width: 100%;
`;

export const CreateAccountBox = styled.View`
  width: 100%;
  max-height: 100%;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  margin-top: 30px;
`;
