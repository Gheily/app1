import { View, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native'
import React, {useState} from 'react';
import { db } from '../../config/firebase';
import { idGenerator } from "../../../utils/IdGenerator";
import { collection, addDoc } from "firebase/firestore";
 
export default function SettingsScreen() {

  //Hooks de estado: useStateSnipped
  const [userName, setUserName] = useState('');
  const [fecha, setFecha] = useState('');
  const [direccion, setDireccion] = useState('');
  const [extension, setExtension] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [puesto, setPuesto] = useState('');

  const createUser =async () => {

    //VALIDACIÓN DE QUE TODO ESTÉ CON DATOS
    if(!userName || !setFecha || !setDireccion || !setExtension || !setTelefono || !setCorreo || !setPuesto){
      Alert.alert("ERROR - Todos los campos son requeridos");
    }else{
      const id = idGenerator(10); //id del Firebase

      await addDoc(collection(db, "directorio"), {
        id: id,
        userName: userName,
        fecha: fecha,
        direccion: direccion,
        extension: extension,
        telefono: telefono,
        correo: correo,
        puesto: puesto
      });

//NativeModules.DevSettings.reload(); //recargar pantalla
Alert.alert("Creación exitosa");
console.log("Ok!");

    }
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Directorio</Text>

      <TextInput
          style = {styles.input}
          onChangeText={(value) => setUserName(value)}
          value = {userName}
          placeholder = "Apellidos y Nombres"
          multiline
          numberOfLines={3}
      />

      <TextInput
          style = {styles.input}
          onChangeText={(value) => setFecha(value)}
          value = {fecha}
          placeholder = "Fecha"
      />

      <TextInput
          style = {styles.input}
          onChangeText={(value) => setDireccion(value)}
          value = {direccion}
          placeholder = "Dirección Institucional"
          multiline
          numberOfLines={5}
      />

      <TextInput
          style = {styles.input}
          onChangeText={(value) => setExtension(value)}
          value = {extension}
          placeholder = "Extensión"
      />

      <TextInput
          style = {styles.input}
          onChangeText={(value) => setTelefono(value)}
          value = {telefono}
          placeholder = "Teléfono Institucional"
      />

      <TextInput
          style = {styles.input}
          onChangeText={(value) => setCorreo(value)}
          value = {correo}
          placeholder = "Correo"
      />

      <TextInput
          style = {styles.input}
          onChangeText={(value) => setPuesto(value)}
          value = {puesto}
          placeholder = "Puesto Institucional"
      />

      <Pressable onPress={createUser} style = {styles.button}>
        <Text style = {styles.label}>Crear Usuario</Text>
      </Pressable>
    </View>
  )

  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'blod',
  },

  input: {
    marginTop: 20,
    borderWidth: 1,
    width: 340,
    height: 40,
    borderRadius: 15,
    borderColor: "#02CCFF",
    padding: 10,
  },

  textArea: {
    maginTop: 10,
    borderWidht: 2,
    width: 340,
    height: 100,
    borderRadius: 5,
    borderColor: "#02CCFF",
    padding: 10,
  },

  button: {
    marginTop: 30,
    padding: 5,
    backgroundColor: '#02CCFF',
    borderRadius: 5,
    width: 340,
    height: 50,
    alignItems: 'center',
    justifyContent:'center',

  },

  label: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});