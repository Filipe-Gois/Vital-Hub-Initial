import { Button, View } from "react-native";

export const Navegacao = ({ navigation }) => {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />

      <Button
        title="Recover Password"
        onPress={() => navigation.navigate("RecoverPassword")}
      />

      <Button
        title="Check Email"
        onPress={() => navigation.navigate("CheckEmail")}
      />

      <Button
        title="Redefine your Password"
        onPress={() => navigation.navigate("RedefinePassword")}
      />

      <Button
        title="Create Account"
        onPress={() => navigation.navigate("CreateAccount")}
      />

      <Button
        title="Medical Record (Prontuário)"
        onPress={() => navigation.navigate("MedicalRecord")}
      />

      <Button title="Perfil" onPress={() => navigation.navigate("Perfil")} />

      <Button
        title="Home User"
        onPress={() => navigation.navigate("Home User")}
      />

      <Button
        title="Select Clinic"
        onPress={() => navigation.navigate("Select Clinic")}
      />

      <Button
        title="Select Doctor"
        onPress={() => navigation.navigate("Select Doctor")}
      />

      <Button
        title="Select Date"
        onPress={() => navigation.navigate("Select Date")}
      />

      <Button
        title="View Medical Record"
        onPress={() => navigation.navigate("View Medical Record")}
      />

      <Button
        title="Clinic Address"
        onPress={() => navigation.navigate("Clinic Address")}
      />
    </View>
  );
};
