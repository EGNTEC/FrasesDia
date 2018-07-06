import React, { Component } from 'react';
import {Text, AppRegistry, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

//Formatações
const Estilos = StyleSheet.create({
    principal: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    botao: {
      backgroundColor: '#538530',
      paddingVertical:10,
      paddingHorizontal: 40,
      marginTop: 20
    },
    textoBotao: {
      color:'#fff',
      fontSize: 16,
      fontWeight:'bold'
    }

});

const botaoPressionado = () =>{  
}

//Criar o componente
export default class App extends Component {
  render() {
    const { principal, botao, textoBotao } = Estilos;
    return (
      
       <View style={principal}>

          <Image source={require('./img/logo.png')} />
          <TouchableOpacity style={botao}>
              <Text style={textoBotao}>Nova Frase</Text>
          </TouchableOpacity>  
          
       </View>
    );
  }
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('frasedia', () => App);

