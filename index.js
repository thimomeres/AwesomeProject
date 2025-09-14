/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Exercise2Image from './Exercise2Image';
import Exercise3bio from './Exercise3bio';
import textinput from './textinput';
// jadi ini yang di tambhakan setiap mau buat filenya kelihatan di emolatorynya
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => textinput);
// ganti appp dengan nama file yang mau di jalankan
