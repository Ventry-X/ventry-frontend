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
      <Text style={styles.brand}>Ventry</Text>


        <Text style={styles.tagline}>Because Access Is Everything</Text>

        <TextInput
          placeholder="email@email.com"
          placeholderTextColor="#000"
          style={styles.inputWide}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="password"
          placeholderTextColor="#000"
          style={styles.inputWide}
          secureTextEntry
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password...</Text>
        </TouchableOpacity>

        <LinearGradient
  colors={['#D4AF37', '#F4E195', '#D4AF37']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={styles.buttonGradient}
>
  <TouchableOpacity style={styles.buttonOverlay}>
    <Text style={styles.signInButtonText}>Sign In</Text>
  </TouchableOpacity>
</LinearGradient>

        <Text style={styles.subtext}>Securely access your account</Text>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.signupTitle}>Sign up</Text>

        <TextInput
          placeholder="email@email.com"
          placeholderTextColor="#000"
          style={styles.inputNarrow}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="password"
          placeholderTextColor="#000"
          style={styles.inputNarrow}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: 'transparent', // gradient will show
  },
  topSection: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  brand: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 4,
    marginTop: 100,
  },
  tagline: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 10,
  },
  inputWide: {
    backgroundColor: '#DBB740',
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 12,
    width: 300,
    alignSelf: 'center',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 2,
    alignContent: 'center',
  },
  forgotPasswordText: {
    color: '#000',
    fontSize: 12,
  },
  signInButton: {
    backgroundColor: '#DBB740',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: 110,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonGradient: {
    borderRadius: 10,
    width: 120,
    height: 42,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center', // ✅ ensure child (TouchableOpacity) is centered
    overflow: 'hidden', // 🧼 clip any overflow
    marginBottom: 15,
  },
  buttonOverlay: {
    flex: 1, // ✅ fill the gradient container fully
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  subtext: {
    marginTop: 6,
    fontSize: 12,
    color: '#ccc',
  },
  bottomSection: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  signupTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  inputNarrow: {
  backgroundColor: '#DBB740',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 10,
  marginBottom: 12,
  width: 230,
  alignSelf: 'center',
},
  socialButton: {
    backgroundColor: '#DBB740',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 10,
  marginBottom: 10,
  width: 230,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  borderTopWidth: 1,
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
