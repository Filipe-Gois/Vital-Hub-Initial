import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen";
import { PerfilScreen } from "../PerfilScreen/PerfilScreen";
import ClinicAddressScreen from "../ClinicAddressScreen/ClinicAddressScreen";
import { Theme } from "../../themes";
import { MainContentIcon, TextIcon } from "./style";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
const BottomTab = createBottomTabNavigator();

const Main = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: Theme.colors.whiteColor,
          height: 80,
          paddingTop: 10,
        },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <MainContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ecf2ff" : "transparent"
                }
              >
                <FontAwesome
                  name="calendar"
                  size={18}
                  color={focused ? Theme.colors.secondary : Theme.colors.grayV2}
                />

                {focused && (
                  <TextIcon
                    colorText={
                      focused ? Theme.colors.secondary : Theme.colors.grayV2
                    }
                  >
                    Agenda
                  </TextIcon>
                )}
              </MainContentIcon>
            );
          } else {
            return (
              <MainContentIcon
                fieldFlexDirection={"row-reverse"}
                tabBarActiveBackgroundColor={
                  focused ? "#ecf2ff" : "transparent"
                }
              >
                <FontAwesome
                  name="user-circle"
                  size={18}
                  color={focused ? Theme.colors.secondary : Theme.colors.grayV2}
                />

                {focused && (
                  <TextIcon
                    colorText={
                      focused ? Theme.colors.secondary : Theme.colors.grayV2
                    }
                  >
                    Perfil
                  </TextIcon>
                )}
              </MainContentIcon>
            );
          }
        },
      })}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />

      <BottomTab.Screen name="Perfil" component={PerfilScreen} />
      {/* <BottomTab.Screen name="GPS" component={ClinicAddressScreen} /> */}
    </BottomTab.Navigator>
  );
};

export default Main;
