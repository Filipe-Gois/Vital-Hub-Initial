import { Button, View } from "react-native"

export const Navegacao = ({ navigation }) => {
    return (
        <View >
            <Button title="Login" onPress={() => navigation.navigate("Login")} />
            <Button title="Recover Password" onPress={() => navigation.navigate("RecoverPassword")} />
            <Button title="Check Email" onPress={() => navigation.navigate("CheckEmail")} />
        </View>
    )
}

