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
import { ButtonSecondary } from "../Button/style";

export const CardConsulta = ({
  dados = [],
  onPressCancel,
  onPressAppointment,
}) => {
  return (
    <CardConsultaStyle>
      <WelComeImage widthImage="26%" heigthImage="100%" src={dados.srcImage} />

      <InfoTextBox>
        <TextCreateAccount1>{dados.name}</TextCreateAccount1>

        <AgeAndType type={dados.type} age={dados.age} />
        <Hour situacao={dados.situacao} horario={dados.horario} />
      </InfoTextBox>

      <CancelBox>
        {dados.situacao === "Pendente" ? (
          <ButtonSecondary padding={"0"} onPress={onPressCancel}>
            <ParagraphMA500
              color={
                dados.situacao === "Pendente"
                  ? Theme.colors.red
                  : Theme.colors.grayBlue
              }
            >
              Cancelar
            </ParagraphMA500>
          </ButtonSecondary>
        ) : (
          dados.situacao === "Realizada" && (
            <ButtonSecondary padding={"0"} onPress={onPressAppointment}>
              <ParagraphMA500 color={Theme.colors.grayBlue}>
                Ver prontuário
              </ParagraphMA500>
            </ButtonSecondary>
          )
        )}

        {/* <ButtonSecondary padding={"0"} onPress={onPressCancel}>
          <ParagraphMA500
            color={
              dados.situacao === "Pendente"
                ? Theme.colors.red
                : Theme.colors.grayBlue
            }
          >
            {dados.situacao === "Pendente"
              ? "Cancelar"
              : dados.situacao === "Realizada" && "Ver prontuário"}
          </ParagraphMA500>
        </ButtonSecondary> */}
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

const Hour = ({ horario = "", situacao = "" }) => {
  return (
    <HourBox situacao={situacao}>
      <MaterialCommunityIcons
        name="clock"
        size={14}
        color={
          situacao === "Pendente" ? Theme.colors.primary : Theme.colors.grayV1
        }
      />

      <ParagraphSemiBold
        colorText={
          situacao === "Pendente" ? Theme.colors.primary : Theme.colors.grayV1
        }
      >
        {horario}
      </ParagraphSemiBold>
    </HourBox>
  );
};
