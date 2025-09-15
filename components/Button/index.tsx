import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = ({label, color}) => {
  return (
    <TouchableOpacity style={styles.button(color)}>
      <Text style={styles.buttonText}>{label} </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    marginTop: 20,
    backgroundColor: color,
    height: 39,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#464645ff',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 2,
  }),
  buttonText: {
    color: '#FFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});
