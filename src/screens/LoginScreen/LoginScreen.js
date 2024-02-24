import {
  Container,
  InputBox,
  FormBox,
  ButtonBox,
  CreateAccountBox,
  MainContent,
} from "../../components/Container/style";
// import LogoVitalHub from "../../assets/logo.svg"
import { LogoComponent } from "../../components/Logo";
import { Title } from "../../components/Title/style";

import { Input } from "../../components/Input";
import { LinkMedium } from "../../components/Link/style";
import {
  Button,
  ButtonGoogle,
  ButtonSecondary,
} from "../../components/Button/style";
import {
  ButtonTitle,
  ButtonTitleGoogle,
} from "../../components/ButtonTitle/style";

import { FontAwesome6 } from "@expo/vector-icons";
import { Theme } from "../../themes";

import {
  TextCreateAccount1,
  TextCreateAccount2,
} from "../../components/Paragraph/style.js";

const LoginScreen = () => {
  return (
    <Container>
      <MainContent>
        <LogoComponent />

        <FormBox>
          <Title>Entrar ou criar conta</Title>

          <InputBox>
            <Input placeholder={"Email:"} />
            <Input placeholder={"Senha:"} />
          </InputBox>

          <LinkMedium>Esqueceu sua senha?</LinkMedium>

          <ButtonBox>
            <Button>
              <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
              <FontAwesome6
                name="google"
                size={16}
                color={Theme.colors.secondary}
              />

              {/* ícone sendo importado diretamente da biblioteca do expo */}

              <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>
          </ButtonBox>
        </FormBox>

        <CreateAccountBox>
          <TextCreateAccount1>Não tem conta ? {""}</TextCreateAccount1>

          <ButtonSecondary
            padding={"0"}
            onPress={() => setShowModalCancel(false)}
          >
            <TextCreateAccount2>Cancelar</TextCreateAccount2>
          </ButtonSecondary>
        </CreateAccountBox>
      </MainContent>
    </Container>
  );
};

export default LoginScreen;
