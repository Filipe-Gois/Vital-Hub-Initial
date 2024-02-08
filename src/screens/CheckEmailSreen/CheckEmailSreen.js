import { useState } from "react"
import { Container, ContainerText, FormBox, InputBoxCheckEmail, MainContent } from "../../components/Container/style"
import { LogoComponent } from "../../components/Logo"
import { Paragraph, UserEmailText } from "../../components/Paragraph/style"
import { Title } from "../../components/Title/style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"

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

                <LogoComponent />

                <FormBox>
                    <Title>Verifique seu e-mail</Title>


                    <ContainerText>
                        <Paragraph>Digite o código de 4 dígitos enviado para </Paragraph>
                        <UserEmailText>{user.userEmail}</UserEmailText>
                    </ContainerText>


                    <InputBoxCheckEmail>
                        <Input fieldValue={user.number1} />
                        <Input fieldValue={user.number2} />
                        <Input fieldValue={user.number3} />
                        <Input fieldValue={user.number4} />
                    </InputBoxCheckEmail>

                    <Button>

                        <ButtonTitle>
                            ENTRAR
                        </ButtonTitle>

                    </Button>


                </FormBox>

            </MainContent>
        </Container>
    )
}

export default CheckEmailSreen