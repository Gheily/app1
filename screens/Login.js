import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import TabNavigation from '../src/navigation/TabNavigation';

export default function Login(props){
const {navigation} = props;
const {email, setEmail} = useState(null);
const {password, setPassword} = useState(null);

const login = () => {

    navigation.navigate("Main");
}

return(
    <View syle = {StyleSheet.container}>
        <TextInput
            style={StyleSheet.input}
            placeholder="Correo Electrónico"
            onChangeText={(value) => setEmail(value)}
            value={email}
        />
        <TextInput
            style={StyleSheet.input}
            placeholder="Contraseña"
            onChangeText={(value) => setPassword(value)}
            value={password}
        />
        <Pressable
        onPress={login}
        style={StyleSheet.button}
        >
            <Text style={styles.textButton}>Iniciar Sesión</Text>
        </Pressable>
        <Text onPress={() => navigation.navigate("Home")}
        style={styles.link}>¿No tienes cuenta?</Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title:{
        marginBottom: 50,
    }
})

}