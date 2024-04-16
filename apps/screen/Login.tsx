import { SafeAreaView ,StyleSheet, View, TextInput, Button, Text } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    TextInput:{
        borderWidth:1,
        borderRadius: 8,
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: '80%',
        margin: 8,
    }
});



function Login (): React.JSX.Element{
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Iniciar Sesión</Text>
                <TextInput style={styles.TextInput} placeholder='Usuario'/>
                <TextInput style={styles.TextInput} placeholder='Contraseña'/>
                <Button title="Ingresar"/>
            </View>
        </SafeAreaView>
    );
}

export default Login;