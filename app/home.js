import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{height: 80, width: 80}} source={require('../assets/gatinho.jpg')} />
      <Text style={styles.titulo}>Pawsome</Text>
      <Link style={{marginTop: 15, fontSize: 15, color: 'blue'}} href="/cadastro">Ir para o Cadastro</Link>
    <View style={styles.imagens}>
      <View style={styles.item}>
        <Image style={{height: 90, width: 90}} source={require('../assets/gatinho.jpg')} />
        <Image style={{height: 90, width: 90}} source={require('../assets/gatinho.jpg')} />
        <Image style={{height: 90, width: 90}} source={require('../assets/gatinho.jpg')} />
        <Image style={{height: 90, width: 90}} source={require('../assets/gatinho.jpg')} />
      </View>
      <View style={styles.item}>
      <Image style={{height: 90, width: 90}} source={require('../assets/gatinho.jpg')} />
      <Image style={{height: 90, width: 90}} source={require('../assets/gatinho.jpg')} />
      <Image style={{height: 90, width: 90}} source={require('../assets/gatinho.jpg')} />
      <Image style={{height: 90, width: 90}} source={require('../assets/gatinho.jpg')} />
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  image: {
    width: 180,
    marginTop: 15,
},
  texto: {
    fontSize: 20,
    marginTop: 10,
  },
  imagens: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' 
  },
});