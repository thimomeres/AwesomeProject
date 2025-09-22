import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const IndexButton = ({label = 'Register', onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IndexButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#9b4dff', // warna ungu khas Register
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
