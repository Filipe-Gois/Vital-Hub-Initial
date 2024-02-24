import React from "react";
import { Modal, View } from "react-native";
import { Title } from "../Title/style";
import {
  Paragraph,
  ParagraphSemiBold,
  TextCreateAccount2,
} from "../Paragraph/style";
import { Button, ButtonBorderCyan, ButtonSecondary } from "../Button/style";
import { ButtonTitle, ButtonTitleModal } from "../ButtonTitle/style";
import {
  AgendarConsultaContent,
  AgendarConsultaContentBox,
  ModalContent,
  ModalImage,
  ModalStyle,
  PatientModal,
} from "./style";
import Nicole from "../../assets/nicole-sarga-modal.png";
import Label from "../Label";
import { ButtonBox, FormBoxModal } from "../Container/style";
import { LabelStyle } from "../Label/style";
import { Theme } from "../../themes";

export const ModalComponent = ({
  visible,
  setShowModalCancel,
  title = "",
  texto = "",
  textButton1 = "",
  textButton2 = "",
  cancel = true,
  srcImage = Nicole,
  ...rest
}) => {
  return (
    <ModalStyle
      visible={visible}
      transparent={true}
      animationType="fade"
      title=""
      {...rest}
    >
      <PatientModal>
        <ModalContent>
          {!cancel && <ModalImage source={srcImage} />}
          <Title>{title}</Title>
          <Paragraph>{texto}</Paragraph>
          <Button padding={"0"}>
            <ButtonTitle>{textButton1}</ButtonTitle>
          </Button>

          <ButtonSecondary onPress={() => setShowModalCancel(false)}>
            <TextCreateAccount2>{textButton2}</TextCreateAccount2>
          </ButtonSecondary>
        </ModalContent>
      </PatientModal>
    </ModalStyle>
  );
};

export const ModalAgendarConsulta = ({
  visible,
  setShowModalCancel,
  title = "",
  texto = "",
  textButton1 = "",
  textButton2 = "",
  cancel = true,
  srcImage = Nicole,
  ...rest
}) => {
  return (
    <ModalStyle
      visible={visible}
      transparent={true}
      animationType="fade"
      title=""
      {...rest}
    >
      <AgendarConsultaContent>
        <FormBoxModal>
          <Title>{title}</Title>

          <LabelStyle>
            <ParagraphSemiBold>Qual o nível da consulta</ParagraphSemiBold>

            <ButtonBox fieldFlexDirection={"row"}>
              <ButtonBorderCyan fieldWidth={"30%"}>
                <ButtonTitleModal>Rotina</ButtonTitleModal>
              </ButtonBorderCyan>

              <ButtonBorderCyan fieldWidth={"30%"}>
                <ButtonTitleModal>Exame</ButtonTitleModal>
              </ButtonBorderCyan>

              <ButtonBorderCyan fieldWidth={"29%"}>
                <ButtonTitleModal>Urgência</ButtonTitleModal>
              </ButtonBorderCyan>
            </ButtonBox>
          </LabelStyle>

          <Label
            titulo="Informe a localização desejada"
            placeholder={"Informe a localização"}
          />

          <Button padding={"0"}>
            <ButtonTitle>{textButton1}</ButtonTitle>
          </Button>

          <ButtonSecondary onPress={() => setShowModalCancel(false)}>
            <TextCreateAccount2>{textButton2}</TextCreateAccount2>
          </ButtonSecondary>
        </FormBoxModal>
      </AgendarConsultaContent>
    </ModalStyle>
  );
};
