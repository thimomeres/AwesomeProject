import React from 'react';
import {Text, StyleSheet} from 'react-native';

const JudulRegist = () => {
  return <Text style={styles.title}>REGISTRATION</Text>;
};

export default JudulRegist;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    padding: 25,
    fontFamily: 'San Francisco',
  },
});
