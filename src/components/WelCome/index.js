import { WelComeImage } from "../ImageProfile";
import { WelComeStyle, WelComeTextBox } from "./style";
import ImageUser from "../../assets/UserProfileImageWelcome.png";
import { Paragraph, TextCreateAccount1 } from "../Paragraph/style";
import { Theme } from "../../themes";

export const WelCome = () => {
  return (
    <WelComeStyle>
      <WelComeImage src={ImageUser} alt="Foto do usuário." />

      <WelComeTextBox>
        <Paragraph textAlign={"start"}>Bem-Vindo</Paragraph>
        <TextCreateAccount1 color={Theme.colors.lightWhite}>Richard Kosta</TextCreateAccount1>
      </WelComeTextBox>
    </WelComeStyle>
  );
};
