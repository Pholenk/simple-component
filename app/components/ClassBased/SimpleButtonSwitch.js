import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default class SimpleButtonSwitch extends Component{
  state = {
    clicked: false
  }
  render () {
    return (
      <View>
        <TouchableOpacity onPress={()=>this.toggleSwitch()}>
          <Text>{this.state.clicked ? 'Switch me again' : 'Switch me' }</Text>
        </TouchableOpacity>
      </View>
    );
  }
  toggleSwitch() {
    this.setState({
      clicked: !this.state.clicked
    })
  }
}
