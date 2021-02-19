import * as React from 'react';
import { View, Text,  TextInput, StyleSheet } from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

export default function Modal(props) {
    return(

        <View style={styles.modalParent}>
          <View style={{margin: 1 }}>
          
            <TouchableOpacity onPress={() => setModal(!showModal)}><Text style={{textAlign: 'right' ,fontSize: 400, color: 'red' }}></Text></TouchableOpacity>
          </View>

          <View style={styles.boxModal}>


            <Text style={{...styles.textHeader, fontSize: 18, fontWeight: 'normal', textShadowColor: 'white', color: 'black', fontWeight: 'bold' }}>Nome:</Text>
            <TextInput onChangeText={(text) => props.setNome(text)} style={styles.textInput} numberOfLines={4}></TextInput>


            <Text style={{...styles.textHeader, fontSize: 18, fontWeight: 'normal', textShadowColor: 'white', color: 'black', fontWeight: 'bold' }}>Mensagem:</Text>
            <TextInput onChangeText={(text) => props.setMensagem(text)}  style={styles.textInput} numberOfLines={4}></TextInput>

            <Text style={{...styles.textHeader, fontSize: 18, fontWeight: 'normal', textShadowColor: 'white', color: 'black', fontWeight: 'bold' }}>Numero:</Text>
            <TextInput onChangeText={(text) => props.setNumber(text)} style={styles.textInput} numberOfLines={1}></TextInput>
            

            <TouchableOpacity onPress={() => props.enviarMensagem()} style={{...styles.btnNavigation, borderRadius: 10, padding: 15}}>
             <Ionicons name="ios-mail-open-outline" size={29} color='white'/>
              <Text style={{ color: 'white', marginTop: 8 }}>Enviar</Text>
            </TouchableOpacity>

          </View>
        </View>
          );
}

const styles = StyleSheet.create({

    textHeader: 
    {
      color: 'purple',
      fontWeight: 'bold',
      fontSize: 24,
      textShadowColor: 'blue',
      textShadowRadius: 1
    },
    btnNavigation:
    {
      backgroundColor: 'purple',
      padding: 20,
      marginTop: 15,
    },
    parentImage:{
      marginTop: 30
    },
    bio: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      textShadowColor: 'red',
      textShadowRadius: 15
    },
    biolong: {
      textAlign: 'justify',
      color: 'black',
      textShadowColor: 'blue',
      textShadowRadius: 1
    },
    modalParent: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 1
    },
    boxModal: {
      backgroundColor: 'white',
      height: '100%',
      width: '100%',
      position: 'absolute',
      left: 0,
      top: '35%',
      marginTop: '10%',
      padding: 10
    },
    textInput:
    {
      height: 35,
      width: '100%',
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10,
    }
  })