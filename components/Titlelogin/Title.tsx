import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  // title: {
  //   fontSize: 36,
  //   fontWeight: '900',
  //   color: '#ff5e00', // oranye vibrant
  //   marginBottom: 24,
  //   textAlign: 'center',
  //   fontFamily: 'Avenir-Black', // fallback modern font
  //   letterSpacing: 2, // spasi antar huruf biar lebih bold
  //   textTransform: 'uppercase', // huruf kapital semua
  //   textShadowColor: 'rgba(0, 0, 0, 0.25)', // efek bayangan
  //   textShadowOffset: {width: 2, height: 2},
  //   textShadowRadius: 4,
  //   margin: 23,
  // },
});
