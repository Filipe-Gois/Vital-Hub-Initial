import React from "react";
import { Modal, View } from "react-native";
import { Title } from "../Title/style";
import { Paragraph, TextCreateAccount2 } from "../Paragraph/style";
import { Button, ButtonSecondary } from "../Button/style";
import { ButtonTitle } from "../ButtonTitle/style";
import { ModalContent, ModalImage, ModalStyle, PatientModal } from "./style";
import Nicole from "../../assets/nicole-sarga-modal.png";

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
          <Button padding={"0"} buttonStatus>
            <ButtonTitle buttonStatus>{textButton1}</ButtonTitle>
          </Button>

          <ButtonSecondary onPress={() => setShowModalCancel(false)}>
            <TextCreateAccount2>{textButton2}</TextCreateAccount2>
          </ButtonSecondary>
        </ModalContent>
      </PatientModal>
    </ModalStyle>
  );
};
