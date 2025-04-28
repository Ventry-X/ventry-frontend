import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import MaskedView from '@react-native-masked-view/masked-view';


const WelcomeScreen1 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#0A1F44', '#8396B9', '#0A1F44']}
      style={StyleSheet.absoluteFillObject}
    >
      <View style={styles.container}>
      
        {/* Brand title wrapper */}
        <View style={styles.brandWrapper}>
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
      <Text style={[styles.brand, { opacity: 0 }]}>Ventry</Text>
    </LinearGradient>
  </MaskedView>
</View>

<Text style={styles.tagline}>
  Because Access Is{'\n'}Everything
</Text>

      </View>

      <View style={styles.box}>
      <Text style={styles.title}>Welcome to Ventry</Text>
      <Text style={styles.description}>Ventry isn’t for everyone.
    </Text>
        <Text style={styles.description}>But it is for you.
</Text>
    <Text style={styles.description}>This is where the elite invest differently.
  </Text>
  
  <View style={styles.pagination}>
    <View style={styles.activeDot} />
    <View style={styles.inactiveDot} />
    <View style={styles.inactiveDot} />
  </View>
</View>

      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => console.log("Onboarding coming soon...")}
      >
        <LinearGradient
          colors={['#977A1A', '#DBB740', '#977A1A']}
          style={[styles.button]} // or 220
        >
          <Text style={styles.buttonText}>Begin Your Journey</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  brand: {
    fontSize: 60, // a bit larger to match visual scale
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    fontFamily: 'Georgia', // matches serif look
    textAlign: 'center',
  },

  brandWrapper: {
    position: 'absolute',
    top: 130, // 👈 tweak this to position it above the subheading
    right: 30, // 👈 align it with subheading
    zIndex: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#ccc',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 8,           // try 4 or 10 if spacing feels off
    marginBottom: 0,        // prevents pushing content downward
    position: 'absolute',
    top: 190,               // adjust until perfectly under "Ventry"
    right: 55,              // same as brandWrapper for alignment
    fontWeight: 600
  },
  box: {
    backgroundColor: 'rgba(255,255,255,0.15)',
  padding: 20,
  borderRadius: 20,
  marginHorizontal: 20,
  marginTop: 100,
  marginBottom: 120,
  alignItems: 'center',
  justifyContent: 'center',
  width: '90%',
  alignSelf: 'center',
  minHeight: 450, // ← increase height to match wireframe
  shadowColor: '#000',
  shadowOpacity: 0.15,
  shadowOffset: { width: 0, height: 5 },
  shadowRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 50,
    fontFamily: 'Georgia',
    textAlign: 'center'
  },
  description: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 70,
    fontFamily: 'Georgia',
    lineHeight: 15, // or 24 for more space
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 10,
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  inactiveDot: {
    width: 10,
    height: 10,
    backgroundColor: '#888',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonWrapper: {
    position: 'absolute',
  bottom: 60,      // distance from bottom of screen
  right: 25,       // distance from right side
  borderRadius: 10,
  },
  button: {
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
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
    textAlign: 'center',
  },
  wrapper: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },  
});

export default WelcomeScreen1;
