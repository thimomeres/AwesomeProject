// import semua library yang dibutuhkan
import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import TextInputExample from './components/TextInput';
import Button from './components/Button';
import Title from './components/Titlelogin/Title';

// Komponen utama LoginScreen
const textinput = () => {
  // state
  const [title, setTitle] = useState('Selamat Datang ');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // handler tombol
  const onSignIn = () => {
    setTitle(`Selamat Datang ${username}`); // pakai backtick `
    console.log('Klik SignIn', {username, password});
  };

  // tampilan UI (return JSX)
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.boxlogo}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.containerLogo}>
          <Image
            style={styles.logologin}
            source={require('./asset/loginlg.png')}
          />
        </View>

        <View style={styles.form}>
          <TextInputExample
            placeholder="Masukan Username anda"
            label="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInputExample
            placeholder="Masukan Password anda"
            label="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TextInputExample
            placeholder="Masukan No Telp anda"
            label="Nomor Telphone"
          />

          <Button label="Sign In" color="#ea8500ff" onPress={onSignIn} />
          <Button
            label="Sign In GOOGLE"
            color="#ea0400ff"
            onPress={() => console.log('Google')}
          />
          <Button
            label="Sign In FACEBOOK"
            color="#0669cbff"
            onPress={() => console.log('Facebook')}
          />
          <Button
            label="Sign In APPLE"
            color="#000000ff"
            onPress={() => console.log('Apple')}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default textinput;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#d0e2dcff',
    paddingHorizontal: 20,
    paddingTop: 10,
    textAlign: 'center',
  },
  boxlogo: {
    backgroundColor: '#e4ebb4ff',
    borderRadius: 102,
    padding: 2,
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#232009ff',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#b58f8fff',
    borderRadius: 50,
    padding: 30,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 2,
  },
  containerLogo: {
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  tex1: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  logologin: {
    width: 120,
    height: 120,
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 75,
    shadowColor: '#7f6c6cff',
  },
});
