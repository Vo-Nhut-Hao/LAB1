import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function StatePropsScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have pressed {count} times</Text>
      <View style={styles.buttonGroup}>
        <Button title="Press me" onPress={() => setCount(count + 1)} />
        <View style={styles.spacing} />
        <Button title="Reset" onPress={() => setCount(0)} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacing: {
    width: 20,
  },
});
