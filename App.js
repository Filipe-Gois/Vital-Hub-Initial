import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import {
  MontserratAlternates_500Medium,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";
import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import RecoverPasswordScreen from "./src/screens/RecoverPasswordScreen/RecoverPasswordScreen";
import CheckEmailSreen from "./src/screens/CheckEmailSreen/CheckEmailSreen";
import RedefinePasswordScreen from "./src/screens/RedefinePasswordScreen/RedefinePassword";
import CreateAccountScreen from "./src/screens/CreateAccountScreen/CreateAccountScreen";
import MedicalRecordScreen from "./src/screens/MedicalRecordScreen/MedicalRecordScreen";
import { PerfilScreen } from "./src/screens/PerfilScreen/PerfilScreen";
import { ConsultasScreen } from "./src/screens/ConsultasScreen/ConsultasScreen";
import HomeScreen from "./src/screens/HomeScreen";
import HomeUserScreen from "./src/screens/HomeUserScreen/HomeUserScreen";
import SelectClinicScreen from "./src/screens/SelectClinicScreen/SelectClinicScreen";
import SelectDoctorScreen from "./src/screens/SelectDoctorScreen/SelectDoctorScreen";
import SelectDateScreen from "./src/screens/SelectDateScreen/SelectDateScreen";

const App = () => {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    //container: envolve toda a estrutura da navegação
    //navigator: componente para a navegação
    //screen: tela
    //component: componente que será chamado
    //options(title): titulo da tela

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navegação"
          component={Navegacao}
          options={{ title: "Navegação" }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="RecoverPassword"
          component={RecoverPasswordScreen}
          options={{ title: "Recover Password" }}
        />

        <Stack.Screen
          name="CheckEmail"
          component={CheckEmailSreen}
          options={{ title: "Check your Email" }}
        />

        <Stack.Screen
          name="RedefinePassword"
          component={RedefinePasswordScreen}
          options={{ title: "Redefine your password" }}
        />

        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ title: "Create Account" }}
        />

        <Stack.Screen
          name="MedicalRecord"
          component={MedicalRecordScreen}
          options={{ title: "Medical Record" }}
        />

        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{ title: "Perfil" }}
        />


        <Stack.Screen
          name="Home User"
          component={HomeUserScreen}
          options={{ title: "Home User" }}
        />

        <Stack.Screen
          name="Select Clinic"
          component={SelectClinicScreen}
          options={{ title: "Select Clinic" }}
        />
        <Stack.Screen
          name="Select Doctor"
          component={SelectDoctorScreen}
          options={{ title: "Select Doctor" }}
        />

        <Stack.Screen
          name="Select Date"
          component={SelectDateScreen}
          options={{ title: "Select Date" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
