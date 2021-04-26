import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Profile({navigation}) {
  return (
    <View style={globalStyles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={globalStyles.row}>
        <View style={globalStyles.boxSmall}>
          <Text style={globalStyles.text}>Username</Text>
          <View style={{flexDirection:'row',margin:1,}}>
            <Text style={{color:'white',fontSize:14,}}>Praveen Sharma </Text><FontAwesome5 name="edit" size={20} color="skyblue"/>
          </View>
        </View>
        <View style={globalStyles.box}>
          <Image source={require('../assets/jelly.jpg')}  style={{width: 100, height: 100, borderRadius: 100/ 2,marginBottom:5,}} />
          <Text style={globalStyles.text}>Change Image</Text>
        </View>
      </View>
      <View style={globalStyles.boxLarge}>
        <Text style={{color:'white',fontSize:17,}}>About</Text>
        <Text style={{color:'white',fontSize:14,}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
    </View>
  );
}
