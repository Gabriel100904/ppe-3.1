import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
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
  </View>
);
};
