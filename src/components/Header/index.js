import { useNavigation } from '@react-navigation/native';
import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome6';
import {StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';

const Header = ({title}) =>
{
  const navigation = useNavigation()
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          
            <TouchableOpacity onPress={()=>{
              navigation.goBack();
            }}>
          {/* <Icon name="home" size={50} color="blue" /> */}
            <Image
            source={require('../../assets/icons/Vector.png')} 
          />
            </TouchableOpacity>
          
          <View>
            <Text>{title}</Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/Logo/hrmslogo.png')} // Replace with your image URL or require your local image
            style={styles.image}
          />
        </View>
      </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 45,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 20,
        color: "#0A0A0A",
        borderColor:"#B3B3B3",
    borderBottomWidth: 2,
        borderTopWidth:2
        
  },
  image: {
    width: 20,       
    height: 20,      
  },
})