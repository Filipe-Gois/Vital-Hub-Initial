import { Linking, Text } from "react-native";
import { Container, ContentComponents } from "../../components/Container/style";
// import LogoVitalHub from "../../assets/logo.svg"
import { LogoComponent } from "../../components/Logo";
import { Title } from "../../components/Title/style";

import { Input } from "../../components/Input";
import { LinkMedium } from "../../components/Link/style";
import { Button, ButtonGoogle } from "../../components/Button/style";
import { ButtonTitle, ButtonTitleGoogle } from "../../components/ButtonTitle/style";

import { FontAwesome6 } from '@expo/vector-icons';
import { Theme } from "../../themes";
import { ContentAccount } from "./style.js"
import { TextAccount } from "../Accountästyle.js"





const LoginScreen = () => {
    return (
        <Container>
            <LogoComponent source={require('../../assets/logo--green.png')} />

            <Title>Entrar ou criar conta</Title>

            <ContentComponents>

                <Input placeholder={'Email:'} />
                <Input placeholder={'Senha:'} />
            </ContentComponents>



            <LinkMedium>Esqueceu sua senha?</LinkMedium>


            {/* <ContentComponents> */}
            <Button>

                <ButtonTitle>
                    Entrar
                </ButtonTitle>

            </Button>
            {/* </ContentComponents> */}



            <ButtonGoogle>

                <FontAwesome6 name="google" size={16} color={Theme.colors.secondary} />


                <ButtonTitleGoogle>
                    Entrar com Google
                </ButtonTitleGoogle>

            </ButtonGoogle>



            <ContentAccount>
                <TextAccount>
                    Não tem conta ? Crie uma agora!
                </TextAccount>
            </ContentAccount>


        </Container>
    );
};

export default LoginScreen;