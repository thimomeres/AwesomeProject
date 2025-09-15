import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native'; // perbaiki import

const TextInputExample = ({placeholder, label, ...rest}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} {...rest} />
    </>
  );
};

export default TextInputExample;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#bd6969ff',
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    color: '#f5f5f5ff',
    marginBottom: 8,
    fontWeight: '600',
  },
});
