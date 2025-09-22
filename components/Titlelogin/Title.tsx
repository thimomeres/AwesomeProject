import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#eedfd6ff',
    marginBottom: 24,
    textAlign: 'center',
    fontFamily: 'Avenir-Black',
    letterSpacing: 2,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
    margin: 23,
  },
});
