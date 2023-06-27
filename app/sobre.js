import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";


export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image style={{height: 150, width: 150}} source={require('../assets/gatinho.jpg')} />
      <Text>Nome do App</Text>
      <Text>
      O Pawsome é um aplicativo inovador projetado especialmente para ajudar os donos de gatos a cuidar de seus felinos de maneira eficiente e responsável. Com uma interface intuitiva e amigável, o app oferece uma variedade de recursos essenciais para o cuidado e bem-estar dos gatos.

Uma das principais funcionalidades do Pawsome é o monitoramento da saúde. O aplicativo permite que os usuários registrem e acompanhem as vacinações, consultas veterinárias e administração de medicamentos de seus gatos. Além disso, oferece lembretes personalizados para garantir que todos os cuidados de saúde estejam sempre em dia.
      </Text>
      <Link style={{marginTop: 15, fontSize: 15, color: 'blue'}} href="/">Voltar para o Index</Link>
    </View>
  );
};


