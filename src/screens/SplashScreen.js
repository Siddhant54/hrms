import React, { useEffect } from 'react';
import {  View, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Delay the navigation for 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Login');  // Navigate to Home after the delay
    }, 2000);  // 3000ms = 3 seconds

    // Clean up the timer if the component unmounts before the timer completes
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splashlogo.png')}  // Replace with your image path
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,               // Makes the View take up the entire screen
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center',     // Centers the content horizontally
    backgroundColor: '#fff',  // Optional: Set background color
  },
  image: {
    width: 200,           // Adjust width as needed
    height: 200,          // Adjust height as needed
    marginBottom: 20,     // Optional: Add space below image
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
