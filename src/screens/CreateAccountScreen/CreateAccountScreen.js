import { Button, ButtonSecondary } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import {
  Container,
  FormBox,
  InputBox,
  MainContent,
} from "../../components/Container/style";
import { Input } from "../../components/Input";
import { LogoComponent } from "../../components/Logo";
import {
  Paragraph,
  TextCreateAccount2,
} from "../../components/Paragraph/style";
import { Title } from "../../components/Title/style";

const CreateAccountScreen = () => {
  return (
    <Container>
      <MainContent>
        <LogoComponent />
        <FormBox>
          <Title>Criar conta</Title>
          <Paragraph>
            Insira seu endereço de e-mail e senha para realizar seu cadastro.
          </Paragraph>

          <InputBox>
            <Input placeholder={"Usuário ou E-mail"} />
            <Input placeholder={"Senha"} />
            <Input placeholder={"Confirmar Senha"} />
          </InputBox>

          <Button>
            <ButtonTitle>CADASTRAR</ButtonTitle>
          </Button>

          <ButtonSecondary
            padding={"0"}
            onPress={() => setShowModalCancel(false)}
          >
            <TextCreateAccount2>Cancelar</TextCreateAccount2>
          </ButtonSecondary>
        </FormBox>
      </MainContent>
    </Container>
  );
};

export default CreateAccountScreen;
