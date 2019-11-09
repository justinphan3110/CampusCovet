import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import InstaClone from './src/InstaClone';

export default class App extends Component {
    render () {
        return (
                <InstaClone />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});


