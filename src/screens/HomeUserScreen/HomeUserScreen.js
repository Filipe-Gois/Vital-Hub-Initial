import React, { useState } from "react";
import {
  ButtonBox,
  Container,
  ContainerBoxStyle,
  MainContent,
  MainContentScroll,
} from "../../components/Container/style";
import { Header } from "../../components/Header";
import UserImage from "../../assets/UserProfileImageWelcome.png";
import Doctor from "../../assets/doctor.png";
import { CalendarList } from "../../components/Calendar";
import { ButtonListAppontment } from "../../components/Button";
import { ButtonTextStyle } from "../../components/ButtonTitle/style";
import Nicole from "../../assets/nicole-sarga.png";
import User from "../../assets/UserProfileImageWelcome.png";
import { ModalComponent } from "../../components/Modal";
import { FlatListStyle } from "../../components/FlatList/style";
import { CardConsulta } from "../../components/CardConsulta";
import Stethoscope from "../../components/stethoscope";

const HomeUserScreen = ({ navigation }) => {
  const [statusLista, setStatusLista] = useState("Pendente");
  const [agendarConsulta, setAgendarConsulta] = useState(false);
  const [dadosPaciente, setDadosPaciente] = useState([
    {
      id: "1",
      name: "Dr. Claudio",
      type: "Rotina",
      age: "22",
      horario: "14:00",
      srcImage: Doctor,
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
      <Header src={UserImage} />

      <MainContentScroll>
        <MainContent>
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
              texto1={
                "Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?"
              }
              textButton1={"Confirmar"}
              textButton2={"Cancelar"}
              // goBack={true}
              navigation={navigation}
              // setNavigation={"SelectClinic"}
            />

            <ModalComponent
              visible={showModalAppointment}
              setShowModalCancel={setShowModalAppointment}
              title={"Niccole Sarga"}
              texto1={"22 anos"}
              texto2={"niccole.sarga@gmail.com"}
              textButton1={"Inserir Prontuário"}
              textButton2={"Cancelar"}
              cancel={false}
            />
          </ContainerBoxStyle>
        </MainContent>
      </MainContentScroll>
      <Stethoscope
        agendarConsulta={agendarConsulta}
        onPressAgendar={() => setAgendarConsulta(true)}
        setAgendarConsulta={() => setAgendarConsulta(false)}
        navigation={navigation}
        setNavigation={"SelectClinic"}
      />
    </Container>
  );
};

export default HomeUserScreen;
