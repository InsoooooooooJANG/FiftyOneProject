import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Loading() {
    return (
      <View style={styles.container}>
        <Image 
          style = {styles.logo}
          source={require('./Images/Loading/Logo.png')} />
        <Image 
          style = {styles.group}
          source={require('./Images/Loading/group.png')} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: "center",
      alignItems:"center"
    },
    logo:{
      
    },
    group:{

    }
  });