import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SimpleButtonSwitch = ({toggleSwitch, clicked}) => (
  <View>
    <TouchableOpacity onPress={()=>toggleSwitch()}>
      <Text>{clicked ? 'Switch me again' : 'Switch me'}</Text>
    </TouchableOpacity>
  </View>
);

SimpleButtonSwitch.defaultProps = {
  clicked: false
}

export default SimpleButtonSwitch;
