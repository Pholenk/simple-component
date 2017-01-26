import React from 'react';
import { View, Text } from 'react-native';

const SimpleComponent = props => (
  <View>
    <Text>{props.timerText}</Text>
  </View>
);

SimpleComponent.defaultProps = {
  timerText: "timer text",
}

export default SimpleComponent;
