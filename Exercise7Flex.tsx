import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const Exercise7Flex = () => {
  return (
    <View style={styles.container0}>
      <View style={styles.container1}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
      </View>

      <View style={styles.container2}>
        <Image
          source={require('./asset/Unklab_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.container3}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    </View>
  );
};

export default Exercise7Flex;

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    flex: 0.12,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  container2: {
    flex: 0.76,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 0.12,
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  box1: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
  },
  box4: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
  },
  logo: {
    width: '80%',
    height: '50%',
  },
});
