import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const Inicio = ({navigation}) => (
  <View style={estilos.container}>
    <Image
      style={{width: 200, height:200}}
      source={require("./prquiz_logo.png")}
    />
    <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Perguntas')}><Text style={estilos.textoBotao}>COMEÇAR</Text>
    </TouchableOpacity>
    <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Ranking')}><Text style={estilos.textoBotao}>RANKING</Text>
    </TouchableOpacity>
  </View>
);

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botao: {
    width: 130,
    height: 90,
    backgroundColor: "#48D1CC",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    margin: 20
  },
  textoBotao: {
    fontSize: 24,
    color: "white",
  }
});

export default Inicio;
