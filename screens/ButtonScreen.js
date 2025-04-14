import React from 'react';
import { View, Button, Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ButtonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Standard Button:</Text>
      <Button title="Press Me" onPress={() => Alert.alert("Hello!")} />

      <Text style={styles.title}>TouchableOpacity:</Text>
      <TouchableOpacity onPress={() => Alert.alert("Hello!")}>
        <Text style={styles.customButton}>TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
  },
  customButton: {
    padding: 10,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
});
