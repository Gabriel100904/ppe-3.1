import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";


export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image style={{height: 150, width: 150}} source={require('../assets/gatinho.jpg')} />
      <Text>Nome do App</Text>
      <Text>
        texto 5
      </Text>
      <Text>
        texto 6
      </Text>
      <Text>
        texto 7
      </Text>
      <Text>
        texto 8
      </Text>
      <Link style={{marginTop: 15, fontSize: 15, color: 'blue'}} href="/">Voltar para o Index</Link>
    </View>
  );
};


