import { Text } from "react-native"
import { Container, FormBox, MainContent } from "../../components/Container/style"
import { LogoComponent } from "../../components/Logo"
import { Title } from "../../components/Title/style"
import { Paragraph } from "../../components/Paragraph/style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { LeftArrowComponent } from "../../components/Arrow"

const RecoverPasswordScreen = () => {


    return (
        <Container>

            <MainContent>

                <LeftArrowComponent />

                <LogoComponent />

                <FormBox>

                    <Title>Recuperar senha</Title>
                    <Paragraph>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Paragraph>

                    <Input placeholder={'Usuário ou E-mail'} />
                    <Button>

                        <ButtonTitle>
                            Continuar
                        </ButtonTitle>
                    </Button>

                </FormBox>


            </MainContent>


        </Container>


    )

}

export default RecoverPasswordScreen