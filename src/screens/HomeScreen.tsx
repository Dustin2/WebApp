import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import DeviceInfo from 'react-native-device-info';

export const HomeScreen = () => {
  const [UserID, setUserID] = useState('');
  console.log(UserID);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        label="Ingresa el UUID del dispositivo"
        value={UserID}
        onChangeText={text => setUserID(text)}
        mode="flat"
        // disabled
      />

      <Text style={styles.title}>identificador del dispositivo:</Text>
      <Button style={styles.button} mode="elevated">
        Generar identificador
      </Button>
      <Button style={styles.button} mode="elevated">
        Activar app
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems:'center',
    //  backgroundColor: Colors.,
  },
  textInput: {
    marginBottom: 15,
    marginTop: 15,
  },
  title: {textAlign: 'center'},
  button: {
    marginBottom: 15,
  },
});
