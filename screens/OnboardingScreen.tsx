import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OnboardingScreen = () => {
  return (
    <LinearGradient colors={['#0d0d0d', '#1a1a1a', '#0d0d0d']} style={styles.container}>
      <Text style={styles.title}>Welcome to Ventry</Text>
      <Text style={styles.subtitle}>Your journey starts here.</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
  },
});

export default OnboardingScreen;