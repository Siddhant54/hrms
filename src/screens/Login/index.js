import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image, ScrollView} from 'react-native';
import Header from '../../components/Header';
import InputField from '../../components/InputComp';
import ButtonBottom from '../../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  return (
    <View style={{flex: 1}}>
      <Header title={'Login'}  />
      <ScrollView contentContainerStyle={styles.container} >
        {/* Top Section */}
        <View style={styles.topSection}>
          <Text style={styles.title}>Account Verification</Text>
          <Text style={styles.subtitle}>Enter Office Email to continue</Text>
          <InputField
          label={"Office Email"}
        placeholder={"user@gmail.com"}
        value={email}
        onChangeText={setEmail}
        emailTrue
       />
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
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
       <ButtonBottom label={"Proceed"} destination={"Login2"}/>
       </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 20,
    justifyContent: 'space-between', 
  },
  topSection: {
    alignItems: 'start', 
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
    fontSize: 15,
    alignSelf: 'flex-end', // Aligns text to the right
    marginTop: 10, // Adds spacing between the image and text
    marginRight: 10,
    textDecorationLine: 'underline',
  },
  bottomSection: {
    alignItems: 'center', // Center the button horizontally
    marginBottom: 20,
  },
  
});
