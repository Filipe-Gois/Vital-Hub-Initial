import { Button, View } from "react-native"

export const Navegacao = ({ navigation }) => {
    return (
        <View >
            <Button title="Login" onPress={() => navigation.navigate("Login")} />

            <Button title="Recover Password" onPress={() => navigation.navigate("RecoverPassword")} />

            <Button title="Check Email" onPress={() => navigation.navigate("CheckEmail")} />

            <Button title="Redefine your Password" onPress={() => navigation.navigate("RedefinePassword")} />

            <Button title="Create Account" onPress={() => navigation.navigate("CreateAccount")} />

            <Button title="Medical Record (Prontuário)" onPress={() => navigation.navigate("MedicalRecord")} />
        </View>
    )
}
