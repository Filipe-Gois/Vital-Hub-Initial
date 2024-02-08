import styled from "styled-components";
import { Theme } from "../../themes";

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: ${Theme.colors.whiteColor};
`
export const MainContent = styled(Container)`
flex: 0 1 auto;
width: 100%;
height: 90%;
/* margin-top: 30px; */
`

export const ContainerText = styled(MainContent)`
height:100%;
`



export const FormBox = styled.View`
width: 90%;
max-height: max-content;
align-items: center;
gap: 20px;
`
export const InputBox = styled(FormBox)`
width: 100%;
`

export const InputBoxCheckEmail = styled(InputBox)`
flex-direction: row;

`
export const ButtonBox = styled(FormBox)`
width: 100%;
`

export const CreateAccountBox = styled.View`
width: 100%;
max-height: 100%;
justify-content: center;
text-align: center;
flex-direction: row;
margin-top: 30px;

`