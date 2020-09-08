import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./isLoading"
import { render } from 'react-dom';
import Login from "./Login/Login"

export default class extends React.Component {
  state={
    isLoading:true
  };
  componentDidMount(){
    setTimeout(function(){this.setState({isLoading:false})}.bind(this), 2000);
  }
  render(){
    const {isLoading} = this.state;
    return isLoading? <Loading></Loading> : <Login></Login>;
  }
}
