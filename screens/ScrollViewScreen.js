import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function ScrollViewScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {[...Array(20)].map((_, i) => (
        <Text key={i} style={styles.item}>
          Item {i + 1}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
