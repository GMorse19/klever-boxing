import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button, 
  Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Klever Boxing!</Text>
      <Image 
        style={styles.gloves}
        source={require('./box-gloves.jpg')}
      />
      <Button
        title='Instagram'
        onPress={() => Alert.alert('You pressed the Button!!!')}
      />
      <StatusBar style="auto" />
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
  gloves: {
    width: '100%',
    height:'40%'
  },
});

