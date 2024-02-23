import React from "react";
import {
  Container,
  FormBox,
  MainContent,
  MainContentScroll,
} from "../../components/Container/style";
import { Button, ButtonSecondary } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { TextCreateAccount2 } from "../../components/Paragraph/style";
import { Theme } from "../../themes";
import { Title } from "../../components/Title/style";
// import CalendarMaximized from "../../components/CalendarMaximized";

const SelectDateScreen = () => {
  return (
    <Container>
      <MainContentScroll>
        <MainContent>
          <FormBox margin={"30px 0 0 0"}>
            <Title>Selecionar clínica</Title>

            {/* <CalendarMaximized/> */}

            <Button padding={"0"} buttonStatus>
              <ButtonTitle buttonStatus={Theme.colors.whiteColor}>
                Continuar
              </ButtonTitle>
            </Button>

            <ButtonSecondary onPress={() => setShowModalCancel(false)}>
              <TextCreateAccount2>Cancelar</TextCreateAccount2>
            </ButtonSecondary>
          </FormBox>
        </MainContent>
      </MainContentScroll>
    </Container>
  );
};

export default SelectDateScreen;
