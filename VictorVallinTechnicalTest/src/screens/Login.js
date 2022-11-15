/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';


const Login = (props) => {
  const { navigation } = props;
  // HOOKS

  //STATE
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState([]);

  //CALLBACKS

  // EFFECTS

  // FUNCTIONS
  function handleChange(key, value) {
    const userTmp = {...user};
    userTmp[key] = value;
    setUser(userTmp);
    setErrors([]);
  }

  function validateEmail(_email) {
    return String(_email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  function handleLoginPress() {
    if (!validateEmail(user.email) || !user.email){
      if (!user.password) {
        setErrors(['Email Invalid', 'Password required']);
      } else {
        setErrors(['Email Invalid']);
      }
    } else {
      // Navigate to tabs screen
      navigation.navigate('Home');
    }
  }

  // RENDER
  const {email = '', password = ''} = user;
  return (
    <View style={styles.mainContainer}>
      <Text>Hello Improving!</Text>
      <TextInput
        style={styles.input}
        onChangeText={value => handleChange('email', value)}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={value => handleChange('password', value)}
        value={password}
        placeholder="Password"
        keyboardType="password"
        type="password"
        secureTextEntry={true}
      />
      {errors.map((error) => (
        <Text key={error} style={styles.errorText}>{error}</Text>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};


// STYLES
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 100,
    paddingHorizontal: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  errorText: {
    color: 'red',
  },
});


export default Login;
