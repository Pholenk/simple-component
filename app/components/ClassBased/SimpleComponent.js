import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class SimpleComponent extends Component {
  static defaultProps = {
    timerText: "hello"
  }
  render() {
      return (<View>
        <Text>{this.props.timerText}</Text>
      </View>);
  }
}
