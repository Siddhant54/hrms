import React from 'react';
import {View, Text, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';

const InputField = ({label, placeholder, value, onChangeText,type,emailTrue}) => {
  let keyboardType = 'default';
  let secureTextEntry = false;
  if (type === 'email') {
    keyboardType = 'text';
    placeholder = "user@gmail.com"
  } else if (type === 'numeric') {
    keyboardType = 'numeric';
    placeholder="0 0 0 0"
  } else if (type === 'password') {
    secureTextEntry = true;
    placeholder="*******"
  }
  return (
    <View
    style={{
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: 'white',
      borderColor: '#000',
      // paddingVertical: 8,
      marginTop:7
    }}>
    <View style={{marginLeft: 20, marginVertical: 5}}>
      <Text style={{fontSize: 12, color: '#333',marginBottom:3}}>{label}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 1,
        }}>
          {emailTrue &&   <Icon name="mail" size={20} color="#000" style={{marginRight: 5}} />
        }
        <TextInput
          style={{
            fontSize: 14,
            color: '#000',
            padding: 0,
            width: '80%',
            letterSpacing: label === "OTP" ? 2 : 0
          }}
          placeholderTextColor={label === "OTP"?"#808080": "black"}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          maxLength={label === "OTP" ? 4 : undefined}
          />
      </View>
    </View>
  </View>
  );
};



export default InputField;
