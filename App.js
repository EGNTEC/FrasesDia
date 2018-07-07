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

const gerarNovaFrase = () =>{ 
  var numAleatorio = Math.random();
  numAleatorio = Math.floor(numAleatorio*5);

  var frases = Array();
  frases[0]='Nunca se ache demais. Pois tudo que é demais, sobra. Tudo que é sobra, é resto. E tudo que é resto vai para o lixo.';
  frases[1]='A nossa maior glória não reside no fato de nunca cairmos, mas sim em levantarmo-nos sempre depois de cada queda.';
  frases[2]='Nunca troque o que mais quer na vida por aquilo que mais quer no momento. Momentos passam, a vida continua.';
  frases[3]='O sábio nunca diz tudo o que pensa, mas pensa sempre tudo o que diz.';
  frases[4]='É sempre a hora certa, para fazer a coisa certa.';
  
  var fraseEscolha = frases[numAleatorio];

  alert(fraseEscolha);
}

//Criar o componente
export default class App extends Component {
  render() {
    const { principal, botao, textoBotao } = Estilos;
    return (
      
       <View style={principal}>

          <Image source={require('./img/logo.png')} />
          <TouchableOpacity 
              onPress={gerarNovaFrase}
              style={botao}>
              <Text style={textoBotao}>Nova Frase</Text>
          </TouchableOpacity>  
          
       </View>
    );
  }
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('frasedia', () => App);

