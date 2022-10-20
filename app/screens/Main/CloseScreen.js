import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'


export default function CloseScreen(props) {
    const {navigation} = props;

    const closeUser = () =>{

        navigation.navigate("Login");

    }

  return (
    <View style={styles.container}>

      <Pressable onPress={closeUser} style = {styles.button}>
        <Text style = {styles.label}>Cerrar Sesión</Text>
      </Pressable>

    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
    button: {
        marginTop: 300,
        marginBottom: 300,
        padding: 10,
        backgroundColor: "#02CCFF",
        borderRadius: 15,
        width: 390,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },

    label: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
      }
});