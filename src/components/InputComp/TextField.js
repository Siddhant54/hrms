import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextField = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888" // Placeholder color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: '#000',
    marginTop: 7,
    height: 120,
    paddingHorizontal: 10, // Add horizontal padding for the input
  },
  input: {
    height: 40,
    fontSize: 16,
  },
});

export default TextField;
