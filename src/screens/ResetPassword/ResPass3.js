import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../../components/Header';
import InputField from '../../components/InputComp';
import ButtonBottom from '../../components/Button';

const ResetPass3 = () => {
  const [password, setPassword] = useState(''); // State for password
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password

  return (
    <View style={{ flex: 1 }}>
      <Header title={'Reset Password'} />
      <ScrollView contentContainerStyle={styles.container} >

        {/* Top Section */}
        <View style={styles.topSection}>
          <InputField
            label="Set A New Password"
            value={password}  // Bind the password state
            type="password"
            onChangeText={setPassword} // Set password
          />
          <InputField
            label="Confirm New Password"
            value={confirmPassword}  // Bind the confirm password state
            type="password"
            onChangeText={setConfirmPassword} // Set confirm password
          />
          <View style={styles.passwordRequirements}>
            <Text style={styles.requirementsTitle}>Password must contain:</Text>
            <View style={{ marginLeft: 10 }}>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.listText}>Min 8 characters</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.listText}>Min 1 uppercase & 1 lowercase letter</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.listText}>At least 1 special symbol</Text>
              </View>
            </View>
          </View>
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
        <ButtonBottom label={"Proceed"} destination={"PasswordSuccess"} />
        </ScrollView>
    </View>
  );
};

export default ResetPass3;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes full screen height
    paddingHorizontal: 20,
    justifyContent: 'space-between', // Distribute items vertically
  },
  topSection: {
    alignItems: 'start', // Center horizontally
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
    color: "#0A0A0A"
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
  },
  passwordRequirements: {
    marginTop: 15,
  },
  requirementsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 16,
    lineHeight: 20,
    marginRight: 8,
    color: '#333', // Bullet color
  },
  listText: {
    fontSize: 14,
    color: '#1A1A1A',
    lineHeight: 20,
  },
  middleSection: {
    width: '100%', // Full width of the parent container
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: '100%', // Full width
    height: 260,   // Fixed height
  },
  forgotPassword: {
    color: '#184CCF', // Blue color
    fontSize: 13,
    alignSelf: 'flex-start', // Aligns text to the right
    marginTop: 10, // Adds spacing between the image and text
    marginRight: 10,
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
    width: "100%"
  },
  buttonText: {
    color: '#FFFFFF',          // White text
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
