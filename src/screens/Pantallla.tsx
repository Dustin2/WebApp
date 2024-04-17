import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';
import HomeScreen from './App'
const Pantalla = () => {
    const [html, setHtml] = useState('');
  
  useEffect(() => {
    fetch('http://bwapi.centralinformatica.com', {
      headers: {
        Authorization: 'Basic Q2VudHJhbEluZm9ybWF0aWNhX1Rva2VuOkJXX2NlblRSQUwxbmYwcjM0dGlDNCordDlXbkVU'
      }
    })
     .then((response) => response.text())
     .then((text) => setHtml(text))
     .catch((error) => console.error(error));
  }, []);
  return <WebView style={{ flex: 1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', width:1500,padding: 100, margin: 65}} source={{ html }} 
  />
  
  };
export default Pantalla;
