/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import ListItem from '../components/MyPhotos/ListItem';

const MyPhotos = () => {

    //STATE

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    //CALLBACKS

    const getData = useCallback(async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/photos').then((r) => r.json()).then(r => r);
        setData(response);
        setLoading(false);
      } catch (e){
        console.log('ERROR', e);
        setData([]);
        setLoading(false);
      }
    }, []);

    // EFFECTS

    useEffect(() => {
      getData();
    }, []);

    // FUNCTIONS


    // RENDER

  return (
    <View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <FlatList
              data={data || []}
              renderItem={(props) => <ListItem {...props} />}
              keyExtractor={item => item.id}
            />
          </>
        )}

    </View>
  );
};

export default MyPhotos;
