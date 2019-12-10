import React from 'react';
import { StyleSheet, Text,TextInput, View, Button } from 'react-native';

import Animated, { Easing } from 'react-native-reanimated';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';


const { Value, timing } = Animated;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this._transY = new Value(0);
    this._config = {
      duration: 350,
      toValue: -120,
      easing: Easing.inOut(Easing.ease),
    };
    this._anim = timing(this._transY, this._config);
      // Create a new PDF in your app's private Documents directory

  }
  



  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.form, { transform: [{ translateY: this._transY }] }]} >
          <Text>Olá</Text>
          <TextInput style={styles.input}
          placeholder="teste"
          onFocus={() => {
            this._anim.start();
          }}></TextInput>
             <TextInput style={styles.input}
          placeholder="teste"
          placeholderTextColor="#FFF"
          onFocus={() => {
            this._anim.start();
          }}></TextInput>
          <Button
          onPress={() => {
          PDFDocument();
          }}
          title="Start"
        />
        </Animated.View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'purple',
    padding: 8,
  },
  form: {
    justifyContent: 'center',
    alignItems:'center',
    width:300,
    height:300,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  input:{
    backgroundColor: 'purple',
    width:200,
    height:60
  }
});