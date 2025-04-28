import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';



const SignInScreen = () => {
  return (
<LinearGradient
 colors={['#0A1F44', '#8396B9', '#0A1F44']}
 style={StyleSheet.absoluteFillObject}
>
  
      <View style={styles.topSection}>
      <MaskedView
  maskElement={
    <Text style={[styles.brand, { backgroundColor: 'transparent' }]}>
      Ventry
    </Text>
  }
>
  <LinearGradient
    colors={['#AC8B1E', '#D0BD75', '#AC8B1E']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
    <Text style={[styles.brand, { opacity: 0 }]}>
      Ventry
    </Text>
  </LinearGradient>
</MaskedView>

        <Text style={styles.tagline}>Because Access Is{'\n'}Everything</Text>

        <TextInput
          placeholder="email@email.com"
          placeholderTextColor="#000"
          style={styles.input}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="password"
          placeholderTextColor="#000"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.subtext}>Securely access your account</Text>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.signupTitle}>Sign up</Text>

        <TextInput
          placeholder="email@email.com"
          placeholderTextColor="#000"
          style={styles.input}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="password"
          placeholderTextColor="#000"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}> Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>

        <View style={styles.accessCodeRow}>
          <TextInput
            placeholder="XXX - XXX"
            placeholderTextColor="#000"
            style={styles.accessCodeInput}
          />
          <TouchableOpacity style={styles.requestCodeButton}>
            <Text style={styles.requestCodeButtonText}>Request Invite Code</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.accessAcceptedButton}>
          <Text style={styles.accessAcceptedButtonText}>Access Accepted</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: 'transparent', // gradient will show
  },
  topSection: {
    marginTop: 10,
    marginLeft: 20,
    alignItems: 'center',
  },
  brand: {
    fontSize: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  fontFamily: 'Georgia',
  marginLeft: 190,
  marginTop: 100,
  },
  tagline: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginLeft: 150,
    fontWeight: 600,
  },
  input: {
    backgroundColor: '#DBB740',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    maxWidth: 300,
    alignSelf: 'center',  
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  forgotPasswordText: {
    color: '#000',
    fontSize: 12,
  },
  signInButton: {
    backgroundColor: '#DBB740',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    maxWidth: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },
  signInButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtext: {
    marginTop: 10,
    fontSize: 12,
    color: '#ccc',
  },
  bottomSection: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  signupTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#DBB740',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 10,
  marginBottom: 15,
  width: '80%',
  maxWidth: 300,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  },
  socialButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  accessCodeRow: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accessCodeInput: {
    backgroundColor: '#8396B9',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
    flex: 1,
    marginRight: 10,
  },
  requestCodeButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  requestCodeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  accessAcceptedButton: {
    width: 160,
    height: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#E4D082',
    borderWidth: 1,
    borderColor: '#E4D082',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 8,
  },
  accessAcceptedButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default SignInScreen;
