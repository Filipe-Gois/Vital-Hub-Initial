import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates'
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

const App = () => {

  const Stack = createNativeStackNavigator()

  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    Montserrat_700Bold,
    Quicksand_500Medium

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

          name='Navegação'
          component={Navegacao}
          options={{ title: "Navegação" }}
        />


        <Stack.Screen

          name='Login'
          component={LoginScreen}
          options={{ title: "Login" }}
        />


      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App