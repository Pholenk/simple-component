import React from 'react';
import { View, Text } from 'react-native';

const PureFunction = props => (
  <View>
    <Text>{props.timerText}</Text>
  </View>
);

PureFunction.defaultProps = {
  timerText: "timer text",
}

export default PureFunction;
