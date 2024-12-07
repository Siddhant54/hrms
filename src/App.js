import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import AppNavigator from './screens/navigation/AppNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Set the StatusBar style and background color */}
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Match StatusBar background color
  },
  container: {
    flex: 1,
  },
  text: {
    fontFamily: 'Manrope-Regular', // Apply Manrope font globally
    fontSize: 18,
    color: '#333',
    marginTop: 20,
  },
});

export default App;
