import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FormScreen() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text>What is your name?</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter name"
      />
      <Button
        title="Submit"
        onPress={() => alert(`Hello, ${name}!`)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
