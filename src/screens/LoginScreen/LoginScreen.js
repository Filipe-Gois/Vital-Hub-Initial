import { Text } from "react-native";
import { Container } from "../../components/Container/style";
// import LogoVitalHub from "../../assets/logo.svg"
import { LogoComponent } from "../../components/Logo";
import { Title } from "../../components/Title/style";
import { InputStyle } from "../../components/Input/style";


const LoginScreen = () => {
    return (
        <Container>
            <LogoComponent source={require('../../assets/logo.png')} />
            <Title>Entrar ou criar conta</Title>

            <InputStyle />
            <InputStyle />

            {/*
            <LinkMedium>Esqueceu sua senha ?</LinkMedium>

            <Button>
                <ButtonTitle>
                    Entrar
                </ButtonTitle>

            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle>
                    Entrar com Google
                </ButtonTitleGoogle>

            </ButtonGoogle>


            <ContentAccount>
                <TextAccount>
                    Não tem conta ? Crie uma agora!
                </TextAccount>

            </ContentAccount> */}

        </Container>
    );
};

export default LoginScreen;