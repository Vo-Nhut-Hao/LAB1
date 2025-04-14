import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MyButton from '../components/MyButton';

export default function CustomButtonScreen() {
  return (
    <View style={styles.container}>
      <MyButton
        text="Click Here"
        onPress={() => Alert.alert('Pressed!')}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
});