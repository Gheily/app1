import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert } from "react-native";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { authentication } from "../config/firebase";
import TabNavigation from "../navigation/TabNavigation";


export default function Register(props) {
    //creación de hooks de estado para firebase por cada input de registro
    const {navigate} = props.navigation;
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
  
    const registrar = () => {
        
        if(!email){
            Alert.alert("Correo electrónico es requerido")
        }else if(!password){
            Alert.alert("Contraseña es requerida")
        }else if(password.lenght<=6){
            Alert.alert("Contraseña mínimo 6 caracteres")
        }else{
            //código copiado de firebase - Regitrar usuarios
            createUserWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
            const user = userCredential.user;
            Alert.alert("Usuario correctamente creado");
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            });
        }
        navigate("Login");
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Registrar</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                onChangeText={(value) => setEmail(value)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
                value={password}
            />
            <Pressable
                onPress={registrar}
                style={styles.button}
            >
                <Text style={styles.textButton}>Registrar</Text>
            </Pressable>
            <Text onPress={() => navigate("Login")} 
            style={styles.link}>¿Ya tienes una cuenta?</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 250,
        height: 125,
        marginTop: 100,
        marginBottom: 30,
    },
    title:{
        marginBottom: 50,
    },
    input: {
        marginTop: 20,
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 20,
        borderColor: "#02CCFF",
        padding: 10,
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#02CCFF",
        borderRadius: 7,
        width: 300,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    link: {
        marginTop:20,
        color:"#02CCFF",
        fontWeight: "bold",
    }
});