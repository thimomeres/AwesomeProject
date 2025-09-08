import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const Exercise2Image = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.containerUtama}>
          <View>
            <Text style={styles.title}>Exercise 2</Text>
          </View>
          {/* logcal Gambar*/}
          <Image
            style={styles.photo1}
            source={require('./assset/Gambarjvs.png')}
          />
          <Text style={styles.text_p}>
            {'  '}
            Selamat datang di Exercise hallo 2 React Navite Disini kami belajar
            tentang Image bagaimana menambahkan image dari 3 sumber yang berbeda
            yaitu :{'\n'}
            <Text style={{fontWeight: 'bold'}}>1.file</Text> {'\n'}
            <Text style={{fontWeight: 'bold'}}>2.url</Text> {'\n'}
            <Text style={{fontWeight: 'bold'}}>3.Base64</Text> {'\n'}
          </Text>
          {/* URL Gambar*/}
          <Image
            style={styles.photo2}
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1752380337760-aa62cbe74b15?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Exercise2Image;

const styles = StyleSheet.create({
  //  stylearea ini untuk mengatur  background color full layar
  safeArea: {
    flex: 1,
    backgroundColor: '#e4e1cfff',
  },
  containerUtama: {
    flex: 1,
    backgroundColor: '#f7e15348', // warna kuning
    // ...style lain...
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'georgia',
    backgroundColor: '#ffbcbcff',
    padding: 6,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  text_p: {
    fontSize: 21,
    color: '#000000',
    textAlign: 'left',
    marginTop: 20,
    fontFamily: 'Arial',
    padding: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  photo1: {
    width: 200,
    height: 200,
    marginTop: 50,
    marginLeft: 85,
  },
  photo2: {
    width: 300,
    height: 200,
    marginTop: 50,
    marginLeft: 20,
    shadowColor: '#ffbcbcff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
