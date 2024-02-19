import { CardConsulta } from "../../components/CardConsulta";
import {
  ButtonBox,
  Container,
  ContainerBoxStyle,
  MainContent,
  MainContentScroll,
} from "../../components/Container/style";
import { Header } from "../../components/Header";
import User from "../../assets/UserProfileImageWelcome.png";
import { CalendarList } from "../../components/Calendar";
import {
  ButtonTextStyle,
  ButtonTitle,
  ButtonTitleHome,
} from "../../components/ButtonTitle/style";
import { Button } from "../../components/Button/style";
import { Theme } from "../../themes";
import { useState } from "react";
import { ButtonListAppontment } from "../../components/Button";
import MenuBar from "../../components/Menu";

const HomeScreen = () => {
  const [statusLista, setStatusLista] = useState("Pendente");
  return (
    <Container>
      <Header />

      <MainContentScroll>
        <MainContent>
          {/* Calendário */}
          <CalendarList />

          <ButtonBox
            fieldFlexDirection={"row"}
            fieldJustifyContent={"space-between"}
            fieldWidth={"90%"}
          >
            <ButtonListAppontment
              clickButton={statusLista === "Pendente"}
              onPress={() => setStatusLista("Pendente")}
            >
              <ButtonTextStyle clickButton={statusLista === "Pendente"}>
                Pendentes
              </ButtonTextStyle>
            </ButtonListAppontment>

            <ButtonListAppontment
              clickButton={statusLista === "Realizada"}
              onPress={() => setStatusLista("Realizada")}
            >
              <ButtonTextStyle clickButton={statusLista === "Realizada"}>
                Realizadas
              </ButtonTextStyle>
            </ButtonListAppontment>

            <ButtonListAppontment
              clickButton={statusLista === "Cancelada"}
              onPress={() => setStatusLista("Cancelada")}
            >
              <ButtonTextStyle clickButton={statusLista === "Cancelada"}>
                Canceladas
              </ButtonTextStyle>
            </ButtonListAppontment>
          </ButtonBox>

          {/* Caixa com os cards */}
          <ContainerBoxStyle
            fieldAlignItems="center"
            fieldGap={"15px"}
            fieldMargin={"20px 0 0 0"}
          >
            <CardConsulta />

            <CardConsulta
              horario={"15:00"}
              type="Urgência"
              srcImage={User}
              name={"Richard Kosta"}
              age={"28 anos"}
              near={false}
            />
          </ContainerBoxStyle>
        </MainContent>
      </MainContentScroll>

      <MenuBar />
    </Container>
  );
};

export default HomeScreen;
