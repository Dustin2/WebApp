import {View, Text} from 'react-native';
import React from 'react';
import axios from 'axios';
import { Button } from 'react-native-paper';
export const HomeScreen = () => {
  const fetchDataWithFetch = async () => {
    const username = 'CentralInformatica_Token';
    const password = 'BW_cenTRAL1nf0r34tiC4*+t9WnET';
    const authToken = from(`${username}:${password}`).toString('base64');

    try {
      const response = await fetch(
        'https://bwgateway.centralinformatica.com/api/Parametros',
        {
          method: 'GET',
          headers: {
            Authorization: `Basic ${authToken}`,
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={fetchDataWithFetch}>
        get data
      </Button>
    </View>
  );
};
