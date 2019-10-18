import React, { Component } from 'react';
import { View,PermissionsAndroid, Alert } from 'react-native';
import { Button } from 'react-native-elements'; // Version can be specified in package.json
import { Permissions, Contacts } from 'expo';
// async function requestCameraPermission() {
//   try {
//     const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: 'Cool Photo App Camera Permission',
//         message:
//           'Cool Photo App needs access to your camera ' +
//           'so you can take awesome pictures.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },);
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//      <View>yes</View>
//     } else {
//       <View>yes</View>
//     }
//   } catch (err) {
//     <View>yes</View>
//   }
// }
export default class App extends Component {
 
  async showFirstContactAsync() {
      // Ask for permission to query contacts.
     //const PermissionsAndroid = await PermissionsAndroid.askAsync(PermissionsAndroid.CONTACTS);
     try {
     const PermissionsAndroid = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CONTACTS);
    //  const granted = await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.CAMERA);
      if (PermissionsAndroid.status !== 'granted') {
        // Permission was denied...
        return;
      }
     
      const contacts = await Contacts.getContactsAsync({
        fields: [
          Contacts.PHONE_NUMBERS,
         // Contacts.EMAILS,
        ],
        pageSize: 10,
        pageOffset: 0,
      });
      if (contacts.total < 0) {
        Alert.alert(
          'Your first contact is...',
          `Name: ${contacts.data[0].name}\n` +
          `Phone numbers: ${contacts.data[0].phoneNumbers[0].number}\n` //+
         // `Emails: ${contacts.data[0].emails[0].email}`
        );
      }
      if (contacts.total > 0) {
        Alert.alert(
          'Your first contact is...',
          `Name: ${contacts.data[0].name}\n` +
          `Phone numbers: ${contacts.data[0].phoneNumbers[0].number}\n` //+
         // `Emails: ${contacts.data[0].emails[0].email}`
        );
      }
    }
     catch (err) {
      console.warn(err);
    }
    }
    
  render() {
    return (
      <View style={{flex: 1, paddingTop: 40}}>
        <Button title='Get contacts' onPress={this.showFirstContactAsync} />
      </View>
    );
  }
}

// import React from 'react';
// import { StackNavigator } from 'react-navigation';
// import { StatusBar, View } from 'react-native';
// import ContactHome from './screens/ContactHome';
// import ContactDetails from './screens/ContactDetails';

// export default class App extends React.Component {
//   constructor() {
//     super();
//     StatusBar.setHidden(true);
//   }
//   render() {
//     return (
//       <ScreenNavigator />
//     );
//   }
// }

// const ScreenNavigator = StackNavigator({
//   Home: { screen: ContactHome },
//   Details: { screen: ContactDetails },
// })
// import { Contacts } from 'expo';
// import com.facebook.react.PackageList;
// const { data } = await Contacts.getContactsAsync({
//     fields: [Contacts.Fields.Emails],
// });

// if (data.length > 0) {
//     const contact = data[0];
//     console.log(contact);
// }