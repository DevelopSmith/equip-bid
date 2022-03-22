import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Logo from '../assets/logo.png';

const Login: () => Node = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    console.log('OK!');
    onLogin();
  };

  const forgotPassword = () => {
    console.log('Forgot Password!');
  };

  return (
    <View style={styles.wrapper}>
      <Image style={styles.logo} source={Logo} />

      <View style={styles.inputSection}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
          autoComplete="username"
          textContentType="username"
        />
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          autoComplete="password"
          textContentType="password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={signIn}>
        <Text style={styles.submitButtonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={forgotPassword}>
        <Text style={styles.forgotPassword}>I forgot my password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    width: 250,
    height: 58,
    marginBottom: 59,
  },
  inputSection: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: 20,
  },
  label: {
    textAlign: 'left',
    fontSize: 20,
    lineHeight: 22,
    marginBottom: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: '#E5E5E5',
    borderRadius: 6,
    padding: 15,
    fontSize: 16,
    lineHeight: 20,
  },
  submitButton: {
    backgroundColor: '#3BB54B',
    borderRadius: 6,
    height: 50,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: 1.25,
    textTransform: 'uppercase',
    color: '#fff',
  },
  forgotPassword: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#3BB54B',
    marginTop: 20,
  },
});

export default Login;
