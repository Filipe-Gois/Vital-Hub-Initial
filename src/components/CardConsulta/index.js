import { WelComeImage } from "../ImageProfile";
import {
  AgeAndTypeBox,
  CancelBox,
  CardConsultaStyle,
  HourBox,
  InfoTextBox,
  Point,
} from "./style";
import {
  ParagraphMA500,
  ParagraphRegular,
  ParagraphSemiBold,
  TextCreateAccount1,
} from "../Paragraph/style";
import { Theme } from "../../themes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Nicole from "../../assets/nicole-sarga.png";

export const CardConsulta = ({ dados = [], statusLista }) => {
  return (
    <CardConsultaStyle>
      <WelComeImage widthImage="26%" heigthImage="100%" src={dados.srcImage} />

      <InfoTextBox>
        <TextCreateAccount1>{dados.name}</TextCreateAccount1>

        <AgeAndType type={dados.type} age={dados.age} />
        <Hour statusLista={dados.statusLista} horario={dados.horario} />
      </InfoTextBox>

      <CancelBox>
        <ParagraphMA500
          color={
            dados.statusLista === "Pendente"
              ? Theme.colors.red
              : Theme.colors.grayBlue
          }
        >
          {dados.statusLista === "Pendente"
            ? "Cancelar"
            : dados.statusLista === "Realizada" && "Ver prontuário"}
        </ParagraphMA500>
      </CancelBox>
    </CardConsultaStyle>
  );
};

const AgeAndType = ({ type = "", age = "" }) => {
  return (
    <AgeAndTypeBox>
      <ParagraphRegular>{age} anos</ParagraphRegular>

      <Point />

      <ParagraphSemiBold>{type}</ParagraphSemiBold>
    </AgeAndTypeBox>
  );
};

const Hour = ({ horario = "", statusLista = "" }) => {
  return (
    <HourBox statusLista={statusLista}>
      <MaterialCommunityIcons
        name="clock"
        size={14}
        color={
          statusLista === "Pendente"
            ? Theme.colors.primary
            : Theme.colors.grayV1
        }
      />

      <ParagraphSemiBold
        colorText={
          statusLista === "Pendente"
            ? Theme.colors.primary
            : Theme.colors.grayV1
        }
      >
        {horario}
      </ParagraphSemiBold>
    </HourBox>
  );
};
