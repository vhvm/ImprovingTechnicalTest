/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';



// STYLES

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
})

const SubmitButton = ({onPress}) => {


  // HOOKS

  //STATE

  //CALLBACKS

  // EFFECTS

  // FUNCTIONS

  // RENDER

  return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Sign in</Text>
      </TouchableOpacity>

  );
};



export default SubmitButton;
