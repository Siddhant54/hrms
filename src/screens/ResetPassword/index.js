import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image, ScrollView} from 'react-native';
import Header from '../../components/Header';
import InputField from '../../components/InputComp';
import ButtonBottom from '../../components/Button';

const ResetPass = () => {
  const [email, setEmail] = useState('');
  return (
    <View style={{flex: 1}}>
      <Header title={'Reset Password'} />
      <ScrollView contentContainerStyle={styles.container} >
        {/* Top Section */}
        <View style={styles.topSection}>
        <InputField
        label="Office label"
        value={email}
        onChangeText={setEmail}
        type={"email"}
        emailTrue
      />
        </View>
        {/* Middle Section */}
        <View style={styles.middleSection}>
      <Image
        source={require('../../assets/loginmid.png')} // Replace with your image path
        style={styles.image}
        resizeMode="cover" // Ensures the image scales properly
      />
    </View>
        {/* Bottom Section */}
        <ButtonBottom label={"Proceed"} destination={"ResetPass2"}/>
        </ScrollView>
    </View>
  );
};

export default ResetPass;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes full screen height
    paddingHorizontal: 20,
    justifyContent: 'space-between', // Distribute items vertically
  },
  topSection: {
    alignItems: 'start', // Center horizontally
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
    color:"#0A0A0A"
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
  },
  middleSection: {
    width: '100%', // Full width of the parent container
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '100%', // Full width
    height: 260,   // Fixed height
  },
  forgotPassword: {
    color: '#184CCF', // Blue color
    fontSize: 14,
    alignSelf: 'flex-end', // Aligns text to the right
    marginTop: 10, // Adds spacing between the image and text
    marginRight: 10,
    textDecorationLine: 'underline',
  },
  bottomSection: {
    alignItems: 'center', // Center the button horizontally
    marginBottom: 20,
  },
  proceedText: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4E00FF', // Custom background color
    paddingVertical: 12,       // Adjust padding
    paddingHorizontal: 25,     // Adjust horizontal padding
    borderRadius: 8,
    width:"100%"
  },
  buttonText: {
    color: '#FFFFFF',          // White text
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
