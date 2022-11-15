/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const InfoItem = (props) => {
    //STATE

    //CALLBACKS

    // EFFECTS

    // FUNCTIONS


    // RENDER
    const {label = '', value = '', onImagePress} = props;
    return (
      <View style={styles.mainContainer}>
        {label === 'profile_image_url' ? (
            <TouchableOpacity onPress={onImagePress}>
                <Image
                    style={{width: 150, height: 150, borderTopLeftRadius: 150, borderTopRightRadius: 150, borderBottomLeftRadius: 150, borderBottomRightRadius: 150 }}
                    source={{
                    uri: value,
                    }} />
            </TouchableOpacity>
            ) : (
                <>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.value}>{value}</Text>
                </>
        )}
      </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
        margin: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#E4E4E4',
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
        fontWeight: '400',
        textTransform: 'capitalize',
    },
    value: {
        fontSize: 14,
        fontWeight: '600',
    },
})

export default InfoItem;
