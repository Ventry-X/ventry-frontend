import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App'; // 👈 Adjust if your App.tsx path is different


const { width } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Welcome to Ventry',
    lines: [
      'Ventry isn’t for everyone.',
      'But it is for you.',
      'This is where the elite invest differently.',
    ],
  },
  {
    key: '2',
    title: 'Your Money, Your Status',
    lines: [
      'AI-guided investments',
      'Tailored to your future',
      'And your lifestyle.',
    ],
  },
  {
    key: '3',
    title: 'This isn’t an app.',
    lines: [
      'It’s a movement.',
      'A gateway.',
      'To everything you were meant for.',
    ],
  },
];

const WelcomeCarousel = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [index, setIndex] = useState(0);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.round((e?.nativeEvent?.contentOffset?.x || 0) / width);
    setIndex(newIndex);
  };

  type SlideItem = {
    key: string;
    title: string;
    lines: string[];
  };
  
  const renderItem = ({ item }: { item: SlideItem }) => (
    <View style={styles.slide}>
      <View style={styles.box}>
        <Text style={styles.title}>{item.title}</Text>
        {item.lines.map((line, i) => (
          <Text key={i} style={styles.description}>{line}</Text>
        ))}
        <View style={styles.pagination}>
  {slides.map((_, i) => (
    <View
      key={i}
      style={[
        styles.dot,
        { backgroundColor: i === index ? '#fff' : '#888' },
      ]}
    />
  ))}
</View>
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={['#0A1F44', '#8396B9', '#0A1F44']}
      style={StyleSheet.absoluteFillObject}
    >
      <View style={styles.container}>
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

        <Text style={styles.tagline}>
          Because Access Is{'\n'}Everything
        </Text>
 </View>

        <FlatList
          data={slides}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          renderItem={renderItem}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        />


        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.navigate('Login')}

        >
          <LinearGradient
            colors={['#977A1A', '#DBB740', '#977A1A']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Begin Your Journey</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
  },
  brand: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#D0BD75',
    fontFamily: 'Georgia',
    marginBottom: 8,
  },
  brandWrapper: {
    position: 'absolute',
    top: 100, // 👈 tweak this to position it above the subheading
    right: 30, // 👈 align it with subheading
    zIndex: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 100,
    fontWeight: '600',
  },
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '94%',
    minHeight: 500,
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
    textAlign: 'center',
  },
  description: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Georgia',
    lineHeight: 24,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 60,
    right: 25,
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
});

export default WelcomeCarousel;
