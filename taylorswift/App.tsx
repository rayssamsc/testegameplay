import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.sue}>
        <text>sue</text>
      </View>
      <View style={styles.taylorswift}>
        <text>taylorswift</text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sue: {
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    

  },
  taylorswift:  {
    width: 100,
    height: 100,
    backgroundColor: 'lightcoral',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
