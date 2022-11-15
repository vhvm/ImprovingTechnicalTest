/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const ListItem = (props) => {
    const {id, url} = props.item;
    //STATE

    //CALLBACKS

    // EFFECTS

    // FUNCTIONS

    // RENDER

  return (
    <View style={styles.cardContainer} key={id}>
        <Image
            style={styles.image}
            source={{
            uri: url,
            }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    cardContainer: {
        margin: 10,
        padding: 5,
    },
    image: {
        width: 200,
        height: 200,
        margin: 5,
    },
});

export default ListItem;
