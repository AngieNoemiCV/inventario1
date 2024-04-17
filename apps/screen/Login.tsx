import { SafeAreaView ,StyleSheet, View, TextInput, Button, Text, Alert } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";

const styles = StyleSheet.create({
    screen:{
        height:'100%',
        backgroundColor:'#323844',
        justifyContent: 'center',
        alignItems:'center'
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#c0c0c0',
        width:'100%',
        padding: 16,
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

type RootStackParamList ={
    Home: undefined;
    Login: undefined;
}
type LoginProps={
    navigation: StackNavigationProp<RootStackParamList,'Home'>;
}



function Login ({navigation}: LoginProps): React.JSX.Element{
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState ('');

    const btnIngresarOnPress = async function () {
        if (usuario && contrasena){
            navigation.navigate('Home');
            return;
        }
            Alert.alert('Fallido', 'Datos Incorrectos');
    };
    return(
        <SafeAreaView style = {styles.screen}>
            <View style={styles.container}>
                <Text>Iniciar Sesión</Text>
                <TextInput 
                style={styles.TextInput} 
                placeholder='Usuario' 
                placeholderTextColor='#828894'
                onChangeText={u => setUsuario(u)}
                />
                <TextInput 
                style={styles.TextInput} 
                placeholder='Contraseña' 
                placeholderTextColor='#828894' 
                secureTextEntry={true}
                onChangeText={p => setContrasena (p)}
                />
                <Button title="Ingresar"
                onPress={btnIngresarOnPress}/>
            </View>
        </SafeAreaView>
    );
}

export default Login;