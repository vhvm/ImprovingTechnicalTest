/* eslint-disable prettier/prettier */
import React, { useCallback, useState } from 'react';
import {View, StyleSheet, Platform, ScrollView} from 'react-native';
import InfoItem from '../components/Profile/InfoItem';
import DocumentPicker, { types } from 'react-native-document-picker';


const dummyData = {
  profile_image_url: 'https://via.placeholder.com/600/f66b97',
  name: 'Victor Vallin',
  email_address: 'medelvictorhugo@gmail.com',
  school: 'Universidad Autonoma de Aguascalientes',
  sos_name: 'Test Name',
  sos_phone_number: '+52 3461094849',
  device_os: Platform.OS,

};

const Profile = () => {
    //STATE

    const [data, setData] = useState(dummyData);

    //CALLBACKS

    const handleDocumentSelection = useCallback(async () => {
      try {
        const response = await DocumentPicker.pick({
          presentationStyle: 'fullScreen',
        });
        const dataTmp = {...data};
        const image = response[0].uri;
        data.profile_image_url = image;
        setData(dataTmp);
      } catch (err) {
        console.warn(err);
      }
    }, []);

    // EFFECTS

    // FUNCTIONS


    // RENDER
    return (
      <ScrollView style={styles.mainContainer}>
        {Object.keys(data).map((key) => {
          return <InfoItem onImagePress={() => handleDocumentSelection()} key={key} value={data[key]} label={key} />;
        })}
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'white', flex: 1}
})

export default Profile;
