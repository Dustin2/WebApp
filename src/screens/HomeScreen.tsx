import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, Button, Alert, AppRegistry, ScrollView,ActivityIndicator, Animated, Linking, TouchableOpacity  } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';
import Pantalla from './Pantalla';

const HomeScreen=() => {
  
  const [title, setTitle] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#000000');
  const [clientLogo, setClientLogo] = useState('');
  
  //extraccion de ID de Dispositivo
  const [asyncDeviceInfo, setAsyncDeviceInfo] = useState('');

  //Api 2 POST de los datos a la api
  const [deviceId, setDeviceId] = useState(asyncDeviceInfo); 
  const [uuid, setUuid] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);
  const [Mensajeerror, setMensajeError] = useState(null)

  const [mostrarPantalla, setMostrarPantalla] = useState(false);

  // -----------------------------api2-----------------------------
    const enviarDatos = async () => {
      
      setIsLoading(true); 
      setMensajeError(null); 
  
      try {
        const myHeaders = new Headers();
        const id = JSON.stringify(asyncDeviceInfo);
        console.log("id del dispositivo " + id );
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', 'Basic Q2VudHJhbEluZm9ybWF0aWNhX1Rva2VuOkJXX2NlblRSQUwxbmYwcjM0dGlDNCordDlXbkVU'); // credenciales
  

        const raw = JSON.stringify({
          idDispositivo: id,
          UUID: uuid,
        });
  
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        };
  
        const response = await fetch('https://bwgateway.centralinformatica.com/api/Activacion', requestOptions);
  
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`); //  error non-200
        }
  
        const result = await response.text();
       
       
        const contrasenauuid = 'cb36e11a-5bdc-4b53-a4c4-bf689f62b40c';
        console.log('Request API:', result, );
        
        // Comparar la contraseña ingresada con la contraseña correcta
        if (uuid === contrasenauuid) {
          Alert.alert('Aplicacion Activada', 'UUID correcta');
          
        }
      }catch (error) {
        setMensajeError(error.Message);
        setIsLoading(false); 
       
      }
    };
  
    // ------------------------------fin api2--------------------------------
    //------------------------------api1-------------------------------------
    useEffect(() => { 
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Q2VudHJhbEluZm9ybWF0aWNhX1Rva2VuOkJXX2NlblRSQUwxbmYwcjM0dGlDNCordDlXbkVU");
        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow',
        };

        const response = await fetch('https://bwgateway.centralinformatica.com/api/Parametros?IdDispositivo=abbcd&UUID=1243', requestOptions);
        const data = await response.json();
        console.log(data[1].Valor);
        if (response.ok && data.length > 0) {
          const backgroundColor = data[0].Valor;
          const logo = data[1].Valor;
          const titulo = data[2].Valor;

          setTitle(titulo);
          setPrimaryColor(backgroundColor);
          setClientLogo(`https://${logo}`);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error('Error no se encontraron datos dinamicos:', error.message);
      }
    };
//------------------------------api1---------------------------
//-----------------------UUID----------------------------------
    const getDataAsync = async () => {
      let deviceJSON = {};
      try {

        deviceJSON = await DeviceInfo.syncUniqueId();
        try {
          // deviceJSON.deviceToken = await DeviceInfo.getDeviceToken();
        } catch (e) {
          console.log(
            'No se pudo obtener el identificador, usa otro dispositivo o superior a ios 11',
          );
        }
      } catch (e) {
        console.log('Trouble getting device info ', e);
      } 
      // eslint-disable-next-line react/no-did-mount-set-state
      setAsyncDeviceInfo(deviceJSON);
    };
    //-------------------------Fin UUID------------------------------

    enviarDatos();
    getDataAsync();
    fetchData();
  }, []);
  
  return (
    
    <View style={{ flex: 1, backgroundColor: primaryColor, alignItems: 'center', justifyContent: 'center' }}>
     
    <Image source={{uri:clientLogo}} style={{ width:300, height: 37, marginBottom: 20 }} />
    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000000' }}>{title}</Text>
    <Text>{"\n"}</Text>

    
    {/* <Text style={{ fontSize: 10, textAlign: 'center', margin: 1,}}>{props.title}</Text> */}
    {/* <Text style={styles.instructions} >{JSON.stringify(asyncDeviceInfo, null, '')}</Text> */}
    <TextInput
      value={uuid}
      onChangeText={setUuid}
      placeholder="INGRESA UUID"
      secureTextEntry={true}
      style={{ height: 40,borderRadius: 15, borderColor: '#000000', borderWidth: 1.3, marginBottom: 10, paddingHorizontal: 1, textAlign: 'center', width:300 }}/>
    <Text>{"\n"}</Text>
      
    <Button title='Activar' onPress={enviarDatos}/>
    <Text>{"\n"}</Text>
    {/* <Button title="Mostrar Pantalla" onPress={togglePantalla} />
      {mostrarPantalla && <Pantalla />} */}
    </View> 
    
  
  );
};

export default HomeScreen ;
