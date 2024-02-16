import { WelComeImageStyle } from "./style";

export const WelComeImage = ({ src = "", alt = "" }) => {
  return <WelComeImageStyle source={src} alt={alt} />;
};
