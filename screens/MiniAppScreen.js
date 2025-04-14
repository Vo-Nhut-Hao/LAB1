import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const ListItem = ({ text }) => (
  <View style={styles.item}>
    <Text>{text}</Text>
  </View>
);

export default function MiniAppScreen() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputText.trim()) {
      setItems([...items, inputText]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Enter new item"
      />
      <Button title="Add Item" onPress={addItem} />

      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem text={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
    fontSize: 16,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});
