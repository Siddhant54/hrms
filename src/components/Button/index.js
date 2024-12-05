import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ButtonBottom = ({ label,destination }) => {

  const navigation = useNavigation(); // Hook for navigation

  const handlePress = () => {
    navigation.navigate(destination); // Navigate to the "Destination" screen
  };
  return (
    <View style={styles.bottomSection}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{label}</Text>
        <Icon name="chevron-forward" size={22} color="white" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonBottom;

const styles = StyleSheet.create({
  bottomSection: {
    width: '100%', // Ensures the button occupies full width
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#4E00FF', // Custom background color
    paddingVertical: 12,       // Adjust padding
    paddingHorizontal: 20,     // Adjust horizontal padding
    borderRadius: 8,
    flexDirection: 'row',      // Row layout for text and icon
    alignItems: 'center',      // Center align items vertically
    justifyContent: 'space-between', // Space between text and icon
  },
  buttonText: {
    color: '#FFFFFF',          // White text
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,                   // Take up remaining space
    textAlign: 'center',       // Center the text
  },
  icon: {
    marginLeft: 10,            // Optional spacing between text and icon
  },
});
