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
import { FlatList, Text } from "react-native";
import Nicole from "../../assets/nicole-sarga.png";
import { FlatListStyle } from "../../components/FlatList/style";
import { CancelattionModal } from "../../components/CancelattionModal/CancelattionModal";
import { ModalComponent } from "../../components/Modal";

const HomeScreen = () => {
  const [statusLista, setStatusLista] = useState("Pendente");
  const [dadosPaciente, setDadosPaciente] = useState([
    {
      id: "1",
      name: "Niccole Sarga",
      type: "Rotina",
      age: "22",
      horario: "14:00",
      srcImage: Nicole,
      situacao: "Pendente",
    },
    {
      id: "2",
      name: "Richard Kosta",
      type: "Urgência",
      age: "28",
      horario: "15:00",
      srcImage: User,
      situacao: "Cancelada",
    },
    {
      id: "3",
      name: "Niccole Sarga",
      type: "Rotina",
      age: "22",
      horario: "14:00",
      srcImage: Nicole,
      situacao: "Pendente",
    },
    {
      id: "4",
      name: "Richard Kosta",
      type: "Urgência",
      age: "28",
      horario: "15:00",
      srcImage: User,
      situacao: "Cancelada",
    },
    {
      id: "5",
      name: "Niccole Sarga",
      type: "Rotina",
      age: "22",
      horario: "14:00",
      srcImage: Nicole,
      situacao: "Pendente",
    },
    {
      id: "6",
      name: "Richard Kosta",
      type: "Urgência",
      age: "28",
      horario: "15:00",
      srcImage: User,
      situacao: "Cancelada",
    },
    {
      id: "7",
      name: "Niccole Sarga",
      type: "Rotina",
      age: "22",
      horario: "14:00",
      srcImage: Nicole,
      situacao: "Realizada",
    },
    {
      id: "8",
      name: "Richard Kosta",
      type: "Urgência",
      age: "28",
      horario: "15:00",
      srcImage: User,
      situacao: "Cancelada",
    },
    {
      id: "9",
      name: "Richard Kosta",
      type: "Urgência",
      age: "28",
      horario: "15:00",
      srcImage: User,
      situacao: "Pendente",
    },
  ]);

  //state para a exibição dos modais
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);

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
          <ContainerBoxStyle fieldAlignItems="center" fieldGap={"15px"}>
            <FlatListStyle
              data={dadosPaciente}
              scrollEnabled={false}
              renderItem={({ item }) =>
                statusLista === item.situacao && (
                  <CardConsulta
                    onPressCancel={() => setShowModalCancel(true)}
                    onPressAppointment={() => setShowModalAppointment(true)}
                    dados={item}
                    statusLista={item.situacao}
                  />
                )
              }
              keyExtractor={(item) => item.id}
            />

            {/* modal cancelar */}

            <ModalComponent
              visible={showModalCancel}
              setShowModalCancel={setShowModalCancel}
              title={"Cancelar consulta"}
              texto={
                "Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?"
              }
              textButton1={"Confirmar"}
              textButton2={"Cancelar"}
            />

            <ModalComponent
              visible={showModalAppointment}
              setShowModalCancel={setShowModalAppointment}
              title={"Niccole Sarga"}
              texto={
                "22 anos      niccole.sarga@gmail.com"
              }
              textButton1={"Inserir Prontuário"}
              textButton2={"Cancelar"}
              cancel={false}
            />

            {/* <CancelattionModal
              visible={showModalCancel}
              setShowModalCancel={setShowModalCancel}
            /> */}

            {/* modal ver prontuário */}
          </ContainerBoxStyle>
        </MainContent>
      </MainContentScroll>

      {/* <MenuBar /> */}
    </Container>
  );
};

export default HomeScreen;
