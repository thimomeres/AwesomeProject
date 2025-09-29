// cara untuk  membuat cepat bagan komponen itu tinggal ketik rnfe
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlexBox = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.greenContainer} />
        <View style={styles.blueContainer} />
      </View>
      <View style={styles.container2}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    </>
  );
};

export default FlexBox;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'lightgrey',
  },
  redContainer: {
    flex: 1,
    backgroundColor: 'lightcoral',
    width: '100%',
  },
  greenContainer: {
    flex: 2,
    backgroundColor: 'lightgreen',
  },
  blueContainer: {
    flex: 2,
    backgroundColor: 'lightblue',
  },
  container2: {
    flex: 0.5,
    backgroundColor: 'brown',
    flexDirection: 'row', // row, row-reverse, column, column-reverse
    justifyContent: 'space-evenly', // untuk mengatur jarak antar item posisi dari  man axis nya  // untuk mengatur posisi dari cross axis nya
    alignItems: 'flex-end', // flex-start, center, flex-end, stretch
  },
  box1: {
    backgroundColor: 'black',
    height: 50,
    width: 50,
  },
  box2: {
    backgroundColor: 'lightseagreen',
    height: 50,
    width: 50,
  },
  box3: {
    backgroundColor: 'lightyellow',
    height: 50,
    width: 50,
  },

  //    atur flext diraction di setiap  untuk pakai row suapaya horizontal
  //   container2: {
  //     flex: 0.5,
  //     backgroundColor: 'brown',
  //     flexDirection: 'row',

  //   justifyContent: 'space-around',
  // untuk mengatur jarak antar item
});
