import { Theme } from "../../themes";
import { HeaderContentBox, HeaderStyle } from "./style";
// import { MaterialIcons } from '@expo/vector-icons';

export const Header = () => {
  return (
    <HeaderStyle>
      <linearGradient
        colors={[Theme.colors.aqua, Theme.colors.darkBlue]}
      >

    <HeaderContentBox>



    {/* <MaterialIcons name="notifications" size={24} color="black" />    */}
    
     </HeaderContentBox>
      </linearGradient>
    </HeaderStyle>
  );
};
