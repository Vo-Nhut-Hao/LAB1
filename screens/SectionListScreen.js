// screens/SectionListScreen.js
import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const DATA = [
  { title: 'A', data: ['Apple', 'Avocado'] },
  { title: 'B', data: ['Banana', 'Blueberry'] },
];

export default function SectionListScreen() {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item}</Text>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    paddingLeft: 20,
    paddingVertical: 5,
  },
  sectionHeader: {
    fontWeight: 'bold',
    backgroundColor: '#eee',
    padding: 5,
  },
});
