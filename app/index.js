import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image style={{height: 150, width: 150}} source={require('../assets/gatinho.jpg')} />
      <Text>Nome do App</Text>
      <Text>
        texto 1
      </Text>
      <Text>
      texto 2
      </Text>
      <Text>
        texto 3
      </Text>
      <Text>
        tetxto 4
      </Text>
      <Link style={{marginTop: 15, fontSize: 15, color: 'blue'}} href="/sobre">Ir para Sobre</Link>
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
  }
});
