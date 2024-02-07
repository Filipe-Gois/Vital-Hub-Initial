import styled from "styled-components";
import { Theme } from "../../themes";

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: ${Theme.colors.whiteColor};

`

export const ContentComponents = styled.View`
width: 100%;
max-height: 100%;
align-items: center;
gap: 20px;
margin-top: 20px;
`
