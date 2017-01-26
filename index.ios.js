/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import SimpleComponent from './app/components/ClassBased';
import SimpleComponent from './app/components/PureFunction';
export default class somehello extends Component {
  state = {
    timerText: 'now'
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        timerText: `then ${new Date().getTime()}`
      });
    }, 1000);
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <SimpleComponent timerText={this.state.timerText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('somehello', () => somehello);
