// import semua library yang dibutuhkan
import React from 'react';
import {
  StyleSheet, // untuk styling komponen // input teks (username, password)
  View, // container untuk mengelompokkan elemen
  Text, // menampilkan teks
  Pressable, // tombol yang bisa ditekan (punya efek pressed)
  Image,
  // menampilkan gambar/logo
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import TextInputExample from './components/TextInput';
import Button from './components/Button';
import Title from './components/Titlelogin/Title';
// SafeAreaProvider & SafeAreaView digunakan supaya konten tidak ketutup notch/status bar

// Komponen utama LoginScreen
const textinput = () => {
  // state untuk menyimpan username & password yang diketik user
  const [username, setUsername] = React.useState(''); // state username
  const [password, setPassword] = React.useState(''); // state password

  // fungsi yang dijalankan saat tombol Sign In ditekan
  const texinput = () => {
    console.log({username, password}); // log data ke console
  };

  // tampilan UI (return JSX)
  return (
    <SafeAreaProvider>
      {/* Provider safe area untuk seluruh layar */}
      <SafeAreaView style={styles.safeArea}>
        {/* Container utama layar dengan style safeArea */}
        <Title>Admin Login</Title>
        {/* Judul besar di atas layar */}

        <View style={styles.containerLogo}>
          {/* Container untuk logo */}
          <Image
            style={styles.logologin}
            source={require('./asset/loginlg.png')} // gambar logo dari folder asset
          />
        </View>

        <View style={styles.form}>
          {/* Panggil Untuk yang sudah di buat di compponents */}
          <TextInputExample
            placeholder="Masukan Username anda"
            label="Username"
          />
          <TextInputExample
            placeholder="Masukan Pasworad anda"
            label="Password"
            secureTextEntry={true}
          />
          <TextInputExample
            placeholder="Masukan No Telp anda"
            label="Nomor Telphone"
          />
          <Button label="Sign In" color="#ea8500ff" />
          <Button label="GOOGLE" color="#ea0400ff" />
          <Button label="FACEBOOK" color="#0669cbff" />
          <Button label="APPLE" color="#000000ff" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default textinput; // export supaya bisa dipakai di App.tsx

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // supaya mengisi seluruh layar
    backgroundColor: '#d0e2dcff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#e4d66bff',
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
