import React, {useState, useEffect} from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert, NativeModules, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { idGenerator } from "../../../utils/IdGenerator";
import { doc, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function HomeScreen() {

  //hooks de estado
  const [lista, setLista] = React.useState([]);
  const [id, setId] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [fecha, setFecha] = React.useState('');
  const [direccion, setDireccion] = React.useState('');
  const [extension, setExtension] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [correo, setCorreo] = React.useState('');
  const [puesto, setPuesto] = React.useState('');

  //hooks de efecto: ayuda a visualizar lo primero de la aplicación
  useEffect(() => {
    let list = [];
  
    async function getDirectorio(){
      
      const querySnapshot = await getDocs(collection(db, "directorio"));
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
        console.log(doc.id, "=>", doc.data());
      });

      setLista(list);

    }

    getDirectorio();

  }, [])
  

  const renderItem = ({item}) => { //recibir item
    return(
    <View style = {styles.item} key = {item.id}>

      <View style = {styles.info}>
        <Text style = {styles.textName}>{item.userName}</Text>
        <Text style = {styles.textFecha}>{item.fecha}</Text>
        <Text style = {styles.textDireccion}>{item.direccion}</Text>
        <Text style = {styles.textExtension}>{item.extension}</Text>
        <Text style = {styles.textTelefono}>{item.telefono}</Text>
        <Text style = {styles.textCorreo}>{item.correo}</Text>
        <Text style = {styles.textPuesto}>{item.puesto}</Text>
      </View>

    </View>
    )
  }

  return (
    //View= vista estática
    <SafeAreaView style={styles.container}>
      
      { //{}-> para colocar código porque SeafAreaView es solo una vista
        lista.lenght > 0 ? (
          <FlatList
            data = {lista}
            renderItem = {renderItem}
            keyExtractor = {item => item.id}
          />
        ) : (
          //caso contrario
          <Text style={styles.textNOProducts}>No existen datos</Text>
        )
      }
      
    </SafeAreaView>
  )
}

//ESTILOS
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  item: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#c2c2c2",
    padding: 10,
    marginTop: 10,
    width: 360,
    height: 100,
    borderRadius: 5,
  },

  info:{
    width:"50%",
  },

  textName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  textFecha: {
    fontSize: 15,
  },

  textDireccion: {
    fontSize: 15,
  },

  textExtension: {
    fontSize: 15,
  },

  textTelefono: {
    fontSize: 15,
  },

  textCorreo: {
    fontSize: 15,
  },

  textPuesto: {
    fontSize: 15,
  },

  textNOProducts:{
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
});  