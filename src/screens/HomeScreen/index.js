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
  ButtonTitle,
  ButtonTitleHome,
} from "../../components/ButtonTitle/style";
import { Button } from "../../components/Button/style";
import { Theme } from "../../themes";

const HomeScreen = () => {
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
            <Button padding="0" fieldWidth={"30%"}>
              <ButtonTitleHome fontSize={"12px"}>Agendadas</ButtonTitleHome>
            </Button>

            <Button
              padding="0"
              backGround={Theme.colors.lightWhite}
              fieldWidth={"30%"}
            >
              <ButtonTitleHome color={Theme.colors.secondary} fontSize={"12px"}>
                Realizadas
              </ButtonTitleHome>
            </Button>

            <Button
              padding="0"
              backGround={Theme.colors.lightWhite}
              fieldWidth={"30%"}
            >
              <ButtonTitleHome color={Theme.colors.secondary} fontSize={"12px"}>
                Canceladas
              </ButtonTitleHome>
            </Button>
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
    </Container>
  );
};

export default HomeScreen;
