// import semua library yang dibutuhkan
import React from 'react';
import {
  StyleSheet, // untuk styling komponen
  TextInput, // input teks (username, password)
  View, // container untuk mengelompokkan elemen
  Text, // menampilkan teks
  Pressable, // tombol yang bisa ditekan (punya efek pressed)
  Image, // menampilkan gambar/logo
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
// SafeAreaProvider & SafeAreaView digunakan supaya konten tidak ketutup notch/status bar

// Komponen utama LoginScreen
const textinput = () => {
  // state untuk menyimpan username & password yang diketik user
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

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

        <Text style={styles.title}>Admin Login</Text>
        {/* Judul besar di atas layar */}

        <View style={styles.containerLogo}>
          {/* Container untuk logo */}
          <Image
            style={styles.logologin}
            source={require('./asset/loginlg.png')} // gambar logo dari folder asset
          />
        </View>

        <View style={styles.form}>
          {/* Container untuk form login */}

          <Text style={styles.label}>Username</Text>
          {/* Label untuk input username */}
          <TextInput
            style={styles.input} // style input kotak
            placeholder="Masukan username anda" // teks petunjuk saat kosong
            value={username} // isi input diikat ke state username
            onChangeText={setUsername} // update state username saat diketik
          />

          <Text style={styles.tex1}>Password</Text>
          {/* Label untuk input password */}
          <TextInput
            style={styles.input}
            placeholder="Masukan password anda"
            value={password}
            onChangeText={setPassword}
            secureTextEntry // supaya karakter password tidak kelihatan
          />

          {/* Tombol Sign In */}
          <Pressable
            onPress={texinput} // jalankan fungsi saat ditekan
            style={({pressed}) => [
              styles.button, // style dasar tombol
              pressed && {backgroundColor: '#e96d00'}, // efek warna saat ditekan
            ]}>
            <Text style={styles.buttonText}>Sign In</Text>
            {/* Teks di dalam tombol */}
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default textinput; // export supaya bisa dipakai di App.tsx

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#111',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#e1c666ff',
    borderRadius: 12,
    padding: 40,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '600',
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
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#F57C00',
    height: 50,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#464645ff',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 2,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
  logologin: {
    width: 150,
    height: 150,
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 75,
    shadowColor: '#7f6c6cff',
  },
});
