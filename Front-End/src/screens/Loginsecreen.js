import React, { useState, useContext } from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { colores, styles } from '../theme/theme'
import logInImage from '../images/Logo.png'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { isLoading, login, error } = useContext(AuthContext);


  const LOGIN_IMAGE = Image.resolveAssetSource(logInImage).uri;

  return (
    <View style={styles.login_container}>
      <Spinner visible={isLoading} />
        <Image source={{ uri: LOGIN_IMAGE }} style={styles.login_image} />
          {error ? (
            <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>
              {error}
            </Text>
          ) : null}
          <TextInput
            style={styles.login_input}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholderTextColor={colores.uno}
            label='Email'
            placeholder='example@email.com'
            autoCapitalize='none'
          />

          <TextInput
            style={styles.login_input}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholderTextColor={colores.uno}
            label='Password'
            placeholder='********'
            autoCapitalize='none'
            secureTextEntry
          />

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              login(email, password);
            }}
          >
            <View style={styles.login_button}>
              <Text style={styles.login_button_text}> Ingresar</Text>
            </View>
          </TouchableOpacity>

          {/* <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View> */}
        </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,


//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: 'center',

//   },
//   wrapper: {
//     width: '80%',

//   },
//   avatar:{
//     marginBottom:37,
// 		borderRadius:100,
// 		marginVertical:100,
//   },
//   input: {
//     marginBottom: 12,
//     padding:5,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//   },
//   link: {
//     color: 'blue',
//   },
//   button:{
//     marginLeft:10,
//   }
// });

export default LoginScreen;
