import React, {useState, useEffect} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';

export const Loginscreen = ({navigation}) => {
  const [UserID, setUserID] = useState('');
  console.log(UserID);
 
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        label="Ingresa el UUID del dispositivo"
        value={UserID}
        onChangeText={text => setUserID(text)}
        mode="outlined"
        // disabled
      />
       <TextInput
        style={styles.textInput}
        label="ID del dispositivo"
        value={UserID}
        onChangeText={text => setUserID(text)}
        mode="outlined"
        disabled
      />

      <Text style={styles.title}>identificador del dispositivo:</Text>
      <Button style={styles.button} mode="elevated">
        Generar identificador
      </Button>
      <Button style={styles.button} mode="elevated">
        Activar app
      </Button>
      <Button style={styles.button} mode="elevated">
        Activar app
      </Button>
      <Button style={styles.button} mode="elevated"
      onPress={()=>{navigation.navigate('Home')}}
      >
      ir al inicio
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
