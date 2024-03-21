import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

//external dependencies
import * as Animatable from 'react-native-animatable';
export function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  //external library to animated text and image
  // https://www.npmjs.com/package/react-native-animatable
  return (
    <View
      style={{
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bb8557',
      }}>
      {/* this text is used in splash screen with props */}
      <Animatable.Image
        style={{width: 400, height:50 }}
        source={{
          uri: 'https://bwgateway.centralinformatica.com/Recursos/CentralInformatica/LogoCI_web.png',
        }}
      />
      <Animatable.Text
        animation="bounceIn"
        duration={2000}
        style={{
          textAlign: 'center',
          color: '#ffff',
          fontFamily: 'bold',
          fontSize: 45,
        }}>
        BW App
      </Animatable.Text>
    </View>
  );
}

// import React, {useState, useEffect} from 'react';
// import {View, StyleSheet} from 'react-native';
// import {TextInput, Button, Text} from 'react-native-paper';
// import DeviceInfo from 'react-native-device-info';

// export const HomeScreen = ({navigation}) => {
//   const [UserID, setUserID] = useState('');
//   console.log(UserID);
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.textInput}
//         label="Ingresa el UUID del dispositivo"
//         value={UserID}
//         onChangeText={text => setUserID(text)}
//         mode="flat"
//         // disabled
//       />

//       <Text style={styles.title}>identificador del dispositivo:</Text>
//       <Button style={styles.button} mode="elevated">
//         Generar identificador
//       </Button>
//       <Button style={styles.button} mode="elevated">
//         Activar app
//       </Button>
//       <Button
//         style={styles.button}
//         mode="elevated"
//         onPress={() => navigation.navigate('Details')}>
//         ir splash screen
//       </Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     // alignItems:'center',
//     //  backgroundColor: Colors.,
//   },
//   textInput: {
//     marginBottom: 15,
//     marginTop: 15,
//   },
//   title: {textAlign: 'center'},
//   button: {
//     marginBottom: 15,
//   },
// });
