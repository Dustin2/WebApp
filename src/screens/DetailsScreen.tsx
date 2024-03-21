import {SafeAreaView, Text,Image} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

export default function DetailsScreen({navigation}) {
  const UserDetails = {
    name: 'off the wall',
    image:
      'https://i0.wp.com/www.wikoliamusic.com/blog/wp-content/uploads/2016/10/djs-wikolia.jpg?fit=1100%2C400&ssl=1',
    backgroundColor: '#14b3c4',
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: UserDetails.backgroundColor,
      }}>
      <Text style={{fontSize: 25, textAlign: 'center'}}>
        Nombre: {UserDetails.name}
      </Text>
      <Image source={{uri:(UserDetails.image)}} 
       style={{ width: 200, height: 200, marginTop: 20 }}
      />
      <Button
        // style={styles.button}
        mode="elevated"
        onPress={() => navigation.navigate('Splash')}>
        ir splash screen
      </Button>
    </SafeAreaView>
  );
}
