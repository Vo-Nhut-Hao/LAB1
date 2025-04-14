// screens/FlatListScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = Array.from({ length: 50 }, (_, i) => ({ key: `${i}`, name: `Item ${i + 1}` }));

export default function FlatListScreen() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
