import { WelComeImage } from "../ImageProfile";
import {
  AgeAndTypeBox,
  CancelBox,
  CardConsultaStyle,
  HourBox,
  InfoTextBox,
  Point,
} from "./style";
import Nicole from "../../assets/nicole-sarga.png";
import {
  ParagraphMA500,
  ParagraphRegular,
  ParagraphSemiBold,
  TextCreateAccount1,
} from "../Paragraph/style";
import { Theme } from "../../themes";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CardConsulta = ({
  name = "Niccole Sarga",
  type = "Rotina",
  age = "22 anos",
  horario = "15:00",
  srcImage = Nicole,
  near = true,
}) => {
  return (
    <CardConsultaStyle>
      <WelComeImage widthImage="26%" heigthImage="100%" src={srcImage} />

      <InfoTextBox>
        <TextCreateAccount1>{name}</TextCreateAccount1>

        <AgeAndType type={type} age={age} />
        <Hour near={near} horario={horario} />
      </InfoTextBox>

      <CancelBox>
        <ParagraphMA500 color={Theme.colors.red}>Cancelar</ParagraphMA500>
      </CancelBox>
    </CardConsultaStyle>
  );
};

const AgeAndType = ({ type = "", age = "" }) => {
  return (
    <AgeAndTypeBox>
      <ParagraphRegular>{age}</ParagraphRegular>

      <Point />

      <ParagraphSemiBold>{type}</ParagraphSemiBold>
    </AgeAndTypeBox>
  );
};

const Hour = ({ horario = "", near = true }) => {
  return (
    <HourBox near={near}>
      <MaterialCommunityIcons
        name="clock"
        size={14}
        color={near ? Theme.colors.primary : Theme.colors.grayV4}
      />

      <ParagraphSemiBold
        colorText={near ? Theme.colors.primary : Theme.colors.grayV4}
      >
        {horario}
      </ParagraphSemiBold>
    </HourBox>
  );
};
