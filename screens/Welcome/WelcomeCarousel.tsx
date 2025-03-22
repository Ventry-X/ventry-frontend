import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

interface CarouselItem {
  title: string;
  subtitle: string;
  image: any;
}

const WelcomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // specify the type

  const renderItem = ({ item }: { item: CarouselItem }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Begin Your Journey</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const entries: CarouselItem[] = [
    {
      title: "Welcome to Ventry",
      subtitle: "Ventry isn’t for everyone. But it is for you.\nThis is where the elite invest differently.",
      image: require('../assets/welcome-image1.png'), // Update with your image path
    },
    {
      title: "What You're About To Unlock",
      subtitle: "You weren’t supposed to find this. But now you have.\nAn AI-powered advantage built for those who expect more.",
      image: require('../assets/welcome-image2.png'), // Update with your image path
    },
    {
      title: "Status. Strategy. Access.",
      subtitle: "For those who demand more from wealth.\nYour advantage starts now. Step inside.",
      image: require('../assets/welcome-image3.png'), // Update with your image path
    },
  ];

  return (
    <View style={styles.container}>
      <Carousel
        data={entries}
        renderItem={renderItem}
        sliderWidth={300} // or any other value that works for your app
        itemWidth={300}
        onSnapToItem={(index: number) => setActiveIndex(index)} // specify index type
        inactiveSlideScale={0.95}
        inactiveSlideOpacity={0.7}
        enableMomentum={true}
        loop={false}
      />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.7}
        inactiveDotScale={0.7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#d4af37', // gold or any color
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    margin: 5,
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});

export default WelcomeCarousel;