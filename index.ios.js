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
// import SimpleComponent from './app/components/ClassBased/SimpleComponent';
// import SimpleButtonSwitch from './app/components/ClassBased/SimpleButtonSwitch';
import SimpleComponent from './app/components/PureFunction/SimpleComponent';
import SimpleButtonSwitch from './app/components/PureFunction/SimpleButtonSwitch';
export default class somehello extends Component {
  state = {
    timerText: 'now',
    clicked: false
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
        <SimpleButtonSwitch clicked={this.state.clicked} toggleSwitch={()=>this.toggleSwitch()}/>
      </View>
    );
  }
  toggleSwitch() {
    this.setState({
      clicked: !this.state.clicked
    });
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
