import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';
import {heading,textButton} from './style';

import {black, red, secondaryDarkRed} from '../config/colors';

export const DefaultModalContentHeader = props => (
  <View style={styles.content}>
    {props.title && (
      <Text style={{...heading, marginBottom: 30}}>{props.title}</Text>
    )}
    <Text style={styles.contentText}>{props.children}</Text>
    <Button 
      full
      testID={'close-button'}
      style={styles.buttonBlackTwo}
      onPress={props.onPress}
      title="Close">
      <Text style={textButton}>Close</Text>
    </Button>
  </View>
);

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentText: {
    fontSize: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: red,
    borderRadius: 5,
    marginTop:10
  },

  buttonBlackTwo: {
    backgroundColor: secondaryDarkRed,
    borderRadius: 5,
    marginTop:10
  },
});
