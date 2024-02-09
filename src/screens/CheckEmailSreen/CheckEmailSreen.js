import { useState } from "react"
import { Container, ContainerText, FormBox, InputBoxCheckEmail, MainContent } from "../../components/Container/style"
import { LogoComponent } from "../../components/Logo"
import { Paragraph, TextCreateAccount2, UserEmailText } from "../../components/Paragraph/style"
import { Title } from "../../components/Title/style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { CloseXComponent } from "../../components/CloseX"

const CheckEmailSreen = () => {


    const [user, setUser] = useState({
        userEmail: "username@email.com",
        number1: 0,
        number2: 0,
        number3: 0,
        number4: 0,
    })
    return (
        <Container>
            <MainContent>
                <CloseXComponent />
                <LogoComponent />

                <FormBox>
                    <Title>Verifique seu e-mail</Title>


                    <ContainerText>
                        <Paragraph>Digite o código de 4 dígitos enviado para </Paragraph>
                        <UserEmailText>{user.userEmail}</UserEmailText>
                    </ContainerText>


                    <InputBoxCheckEmail>
                        <Input fieldWidth={18} maxLength={1} keyType={"numeric"} fieldValue={user.number1} />
                        <Input fieldWidth={18} maxLength={1} keyType={"numeric"} fieldValue={user.number2} />
                        <Input fieldWidth={18} maxLength={1} keyType={"numeric"} fieldValue={user.number3} />
                        <Input fieldWidth={18} maxLength={1} keyType={"numeric"} fieldValue={user.number4} />
                    </InputBoxCheckEmail>

                    <Button>

                        <ButtonTitle>
                            ENTRAR
                        </ButtonTitle>

                    </Button>

                    <TextCreateAccount2>
                        Reenviar Código
                    </TextCreateAccount2>


                </FormBox>

            </MainContent>
        </Container>
    )
}

export default CheckEmailSreen