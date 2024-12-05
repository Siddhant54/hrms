import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/Header'; // Ensure Header is correctly imported

const PasswordSuccess = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title={'Reset Password'} />
      <View style={styles.container}>
        <Text style={styles.successMessage}>Password is set successfully</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensures the SafeAreaView takes up the full screen
    backgroundColor: '#f0f0f0', // Light background color for the entire screen
  },
  container: {
    flex: 1, // Takes up full screen excluding the header
    justifyContent: 'center', // Vertically centers content
    alignItems: 'center', // Horizontally centers content
  },
  successMessage: {
    fontSize: 13,
    color: '#3E7407', // Green color for success message
    textAlign: 'center',
  },
});

export default PasswordSuccess;
