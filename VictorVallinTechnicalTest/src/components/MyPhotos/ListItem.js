/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const rightSwipeActions = () => {
    return (
      <View
        style={{
          backgroundColor: '#ff8303',
          justifyContent: 'center',
          alignItems: 'flex-end',
          height: 100,
          margin: 10,
        }}
      >
        <Text
          style={{
            color: '#1b1a17',
            paddingHorizontal: 30,
            fontWeight: '600',
            paddingVertical: 20,
          }}
        >
          Delete
        </Text>
      </View>
    );
  };

const ListItem = (props) => {
    const {title, id, thumbnailUrl} = props.item;
    //STATE

    //CALLBACKS

    // EFFECTS

    // FUNCTIONS

    const swipeFromRightOpen = () => {
        alert('Swipe from right');
    };

    // RENDER

  return (
    <Swipeable
        renderRightActions={rightSwipeActions}
        onSwipeableRightOpen={swipeFromRightOpen}
       key={id}>
        <View  style={styles.cardContainer} >
            <Image
                style={styles.thumbnail}
                source={{
                uri: thumbnailUrl,
                }}
            />
            <Text>{title}</Text>
        </View>

    </Swipeable>
  );
};


const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#DBEAEC',
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        margin: 10,
        padding: 5,
    },
    thumbnail: {
        width: 50,
        height: 50,
        margin: 5,
    },
});

export default ListItem;
