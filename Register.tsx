import React from 'react';
import {StyleSheet, View} from 'react-native';
import JudulRegist from './components/Judul_regist/JudulRegist';
import TextInputRegist from './components/TextInputregist/TextInputRegist';
import IndexButton from './components/ButtonRegist/IndextButton';

const Register = () => {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const onRegist = () => {
    console.clear(); // opsional: bersihkan log lama
    console.log('=== DATA REGISTER ===');
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone:', phone);
    console.log('=====================');
  };

  return (
    <View style={styles.container}>
      <JudulRegist />

      <TextInputRegist
        label="Name"
        placeholder="Masukan nama lengkap anda"
        value={name}
        onChangeText={setName}
      />
      <TextInputRegist
        label="Username"
        placeholder="Masukan username anda"
        value={username}
        onChangeText={setUsername}
      />
      <TextInputRegist
        label="Email"
        placeholder="Masukan email anda"
        value={email}
        onChangeText={setEmail}
      />
      <TextInputRegist
        label="Address"
        placeholder="Masukan alamat anda"
        value={address}
        onChangeText={setAddress}
      />
      <TextInputRegist
        label="Phone Number"
        placeholder="Masukan nomor telepon anda"
        onlyNumbers={true}
        maxLength={12} // opsional: batasi maksimal 12 digit
        value={phone}
        onChangeText={setPhone}
      />

      <IndexButton label="Register" onPress={onRegist} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
  },
});
