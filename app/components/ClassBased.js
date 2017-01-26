import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class ClassBased extends Component {
  static defaultProps = {
    timerText: "hello"
  }
  render() {
      return (<View>
        <Text>{this.props.timerText}</Text>
      </View>);
  }
}
