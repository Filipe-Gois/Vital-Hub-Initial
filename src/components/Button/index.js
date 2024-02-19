import { Image } from "react-native";
import { ButtonTextStyle, ButtonTitleGoogle } from "../ButtonTitle/style";
import { ButtonGoogle, ButtonTabStyle } from "./style";

export const ButtonGoogleComponent = () => {
  return (
    <ButtonGoogle>
      <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
    </ButtonGoogle>
  );
};

export const ButtonListAppontment = ({
  textButton,
  clickButton = false,
  onPress,
  children,
  fieldWidth,
}) => {
  return (
    <ButtonTabStyle fieldWidth={fieldWidth} clickButton={clickButton} onPress={onPress}>
      {/* <ButtonTextStyle clickButton={clickButton}>{textButton}</ButtonTextStyle> */}
      {children}
    </ButtonTabStyle>
  );
};
