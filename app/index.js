import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image style={{height: 150, width: 150}} source={require('../assets/gatinho.jpg')} />
      <Text>Pawsome</Text>
      <Text>

      Pawsome, o aplicativo que é um verdadeiro aliado para o cuidado do seu gato. Com recursos intuitivos e práticos, você pode monitorar a saúde e bem-estar felino com facilidade. Desde lembretes de vacinação até dicas de alimentação, Pawsome mantém seu gato sempre em dia. Uma ferramenta indispensável para os amantes de felinos, proporcionando cuidado e amor em um único toque. Baixe o Pawsome e leve a experiência de cuidar do seu gato para um novo patamar.      </Text>
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
