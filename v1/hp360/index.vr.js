import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

class hp360 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('eight-top.jpg')}/>
        <Text
          style={{
            padding: 0.02,
            textAlign:'center',
            textAlignVertical:'center',
            fontSize: 0.4,
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -3]}],
          }}>
            hello, i am chloe.
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('hp360', () => hp360);
