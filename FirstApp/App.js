import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, PermissionsAndroid} from 'react-native';

import { ContactsSectionList } from "react-native-contacts-sectionlist";
export default class App extends Component {
  render() {
    return <ContactsSectionList />;
  }
}

// type Props = {};
// export default class App extends Component<Props> {
//   state={
//     contacts: null
//   }

//   componentDidMount(){
//   if(Platform.OS === 'ios'){
//     Contacts.getAll((err, contacts) => {
//       if (err) {
//         throw err;
//       }
//       // contacts returned
//       this.setState({contacts})
//     })
//   }else if(Platform.OS === 'android'){
//     PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//       {
//         title: 'Contacts',
//         message: 'This app would like to view your contacts.'
//       }
//     ).then(() => {
     
//       Contacts.getAll((err, contacts) => {
//         if (err === 'denied'){
//           // error
//           throw err;
//         } else {
//           // contacts returned in Array
//           //const co=contacts.givenName='Abu';
//            this.setState({contacts})
//           // console.log(contacts[0]);
//          //console.log(contacts.givenName='Bilal');
          
//         }
//       })
//     })
//   }
//   }

//   render () {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.contacts}
//           renderItem={({ item }) => (
//             <View>
//               <Text style={styles.contact_details}>
//                 Name: {`${item.givenName} `} Surname: {item.familyName} 
//               </Text>
//               {item.phoneNumbers.map(phone => (
//                 <Text style={styles.phones}>{phone.label} : {phone.number}</Text>
//               ))}
              
//             </View>
//           )}
//           //Setting the number of column
//           numColumns={1}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     marginTop:30,
//   },
//   phones: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   contact_details: {
//     textAlign: 'center',
//     color: 'red',
//     margin: 10,
//   },
// });
// import React, { Component } from 'react';
// import { View,PermissionsAndroid, Alert,Linking,Button } from 'react-native';
// import * as Contacts from 'react-native-contacts';
// export default class App extends Component {
  
//   async requestReadContactsPermission() {
    
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//         {
//           'title': 'App Premission',
//           'message': 'Chat x App need permission.'
//         }
//       )
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("You can read contacts")
//       } else {
//         console.log("read contacts permission denied")
//       }
//     } catch (err) {
//       console.warn(err)
//     }
//   }
//   listContacts() {
//     requestReadContactsPermission().then(
//         Contacts.checkPermission((err, permission) => {
//             if (err) throw err;

//             // Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED || Contacts.PERMISSION_DENIED
//             if (permission === 'undefined') {
//               Contacts.requestPermission((err, permission) => {
//                 // ...
//               })
//             }
//             if (permission === 'authorized') {
//               Contacts.getAll((err, contacts) => {
//                 if (err) throw err;
          
//                     // contacts returned
//                    console.log(contacts)
//                 })
//               this.getAllContacts()
//             }
//             if (permission === 'denied') {
//               // x.x
//             }
//           })
//     )

// }
//   async  requestCameraPermission() {
//     const { data } = await Contacts.getContactsAsync({
//       fields: [Contacts.Fields.PHONE_NUMBERS],
//     });
    
//     if (data.length > 0) {
//       const contact = data[0];
//       console.log(contact);
//     }
//     // const { Location, Permissions } = Expo;
//     // const { status } = await Permissions.askAsync(Permissions.LOCATION);
//     // if (status === 'granted') {
//     //   return Location.getCurrentPositionAsync({enableHighAccuracy: true});
//     // } else {
//     //   throw new Error('Location permission not granted');
//     // }
  
//     //if (Platform.OS == 'android') {
//       // PermissionsAndroid.request(
//       //     PermissionsAndroid.PERMISSIONS.READ_CONTACTS
//       // )
//       // .then(granted => {
//       //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       //     const { data: contacts } = await Contacts.getContactsAsync({ 
//       //       fields: [Contacts.Fields.PhoneNumbers], 
//       //       sort: Contacts.SortTypes.FirstName 
//       //    });
    
//       //     }
//       //     else {
//       //         // Handle
//       //     }
//       // })
//       // .catch(err => {
//       //     console.log('PermissionsAndroid', err)
//       // })
//  // }
//     // const { data } = await Contacts.getContactsAsync({
//     //   fields: [Contacts.Fields.Emails],
//     // });
    
//     // if (data.length > 0) {
//     //   const contact = data[0];
//     //   console.log(contact);
//     // }
//     // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS).then(() => {
//     //   alert(JSON.stringify("Permission was success..."));
//     //   Contacts.getAll((err, contacts) => {
//     //     if (err === "denied") {
//     //       // error
//     //     } else {
//     //       console.log(contacts[0]);
//     //     }
//     //   });
//     // });
//   }
//   async showFirstContactAsync() {

// // try {
	


// //} catch (e) {
// 	//console.warn(e);
// //}
//      //  try {
//     //  const PermissionsAndroid = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
//     // //  const granted = await PermissionsAndroid.request(
//     // //   PermissionsAndroid.PERMISSIONS.CAMERA);
//     //   if (PermissionsAndroid.status !== 'granted') {
//     //     // Permission was denied...
//     //     return;
//     //   }
//    PermissionsAndroid.request( PermissionsAndroid.PERMISSIONS.READ_CONTACTS).then(() => {
//     alert(JSON.stringify("Permission was success..."));
//     Contacts.getAll((err, contact) => this.setState({ contact }));
//       Contacts.getAll((err, contacts) => {
//         if (err === "denied") {
//           // error
//         } else {
//           console.log(contacts[0]);
//         }});
//       // Contacts.checkPermission((error, res) => {
//       //   if (res === 'authorized') {
//           //Contacts.getAll((err, contact) => this.setState({ contact }));
//         //}
//      // })
//     // Linking.openURL('content://com.android.contacts/contacts')
//       });
     
//   //   });
//   //   const { data } = await Contacts.getContactsAsync({
//   //     fields: [Contacts.Fields.Emails],
//   //   });
    
//   //   if (data.length > 0) {
//   //     const contact = data[0];
//   //     console.log(contact);
//   //   }
//     //success

//   //  const granted = await PermissionsAndroid.request( PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
//   //        if(granted){
//   //     alert(JSON.stringify("Permission was success..."));
//   //     //getContactsAsync(contactQuery: ContactQuery): Promise<ContactResponse>
//   //     // const { data } = await Contacts.getContactsAsync({
//   //     //   fields: [Contacts.Fields.PHONE_NUMBERS],
//   //     // });
      
//   //     // if (data.length > 0) {
//   //     //   const contact = data[0];
//   //     //   console.log(contact);
//   //     // }
    
//   //   }
//   //   else
//   //   {alert(JSON.stringify("Permission was denied..."));}
    



//     //const PermissionsAndroid = await PermissionsAndroid.askAsync(PermissionsAndroid.READ_CONTACTS);
//     // const granted = await PermissionsAndroid.request( PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
//     //   //  if (granted.status !== 'granted') {
//     //   // // Permission was denied...
//     //   // alert(JSON.stringify("Permission was denied..."));
//     //   // return;}
//     // if(granted){
//     //   alert(JSON.stringify("Permission was success..."));
//     //   //getContactsAsync(contactQuery: ContactQuery): Promise<ContactResponse>
//     //   // const { data } = await Contacts.getContactsAsync({
//     //   //   fields: [Contacts.Fields.PHONE_NUMBERS],
//     //   // });
      
//     //   // if (data.length > 0) {
//     //   //   const contact = data[0];
//     //   //   console.log(contact);
//     //   // }
//     // }
//     // else
//     // {alert(JSON.stringify("Permission was denied..."));

//     // }
//     // alert(JSON.stringify("success"));
//     //    const contacts = await Contacts.getContactsAsync({
//     //     fields: [
//     //       Contacts.PHONE_NUMBERS,
//     //      // Contacts.EMAILS,
//     //     ],
//     //     pageSize: 10,
//     //     pageOffset: 0,
//     //   });
//     // PermissionsAndroid.request(
//     //   PermissionsAndroid.PERMISSIONS.CAMERA,
//     //   {
//     //     'title': 'Contacts',
//     //     'message': 'This app would like to view your contacts.'
//     //   }
//     // ).then(() => {
//     //   // open the permissions app
//     // })
// // try {
// //   const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
// //   //const PermissionsAndroid = await PermissionsAndroid.askAsync(PermissionsAndroid.READ_CONTACTS);
// //   //   if (PermissionsAndroid.status !== 'granted') {
// //   //     // Permission was denied...
// //   //     return;}
// //     // if (granted) {
// //     //     const contact = ContactsPciker.pickContact();
// //     //     alert(JSON.stringify(contact));
// //     // }
// //     alert(JSON.stringify("asass"));
// // } catch (e) {
// //     console.warn(e);
// // // }
// //   Linking.openURL('content://com.android.contacts/contacts')

//       // Ask for permission to query contacts.
//      //const PermissionsAndroid = await PermissionsAndroid.askAsync(PermissionsAndroid.CONTACTS);
//     // try {
//       //const PermissionsAndroid = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
//   //   const PermissionsAndroid = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
//     //  const granted = await PermissionsAndroid.request(
//     //   PermissionsAndroid.PERMISSIONS.CAMERA);
//       // if (PermissionsAndroid.status !== 'granted') {
//       //   // Permission was denied...
//       //   return;
//       // }
     
//       // const contacts = await Contacts.getContactsAsync({
//       //   fields: [
//       //     Contacts.PHONE_NUMBERS,
//       //    // Contacts.EMAILS,
//       //   ],
//       //   pageSize: 10,
//       //   pageOffset: 0,
//       // });
//       // if (contacts.total < 0) {
//       //   Alert.alert(
//       //     'Your first contact is...',
//       //     `Name: ${contacts.data[0].name}\n` +
//       //     `Phone numbers: ${contacts.data[0].phoneNumbers[0].number}\n` //+
//       //    // `Emails: ${contacts.data[0].emails[0].email}`
//       //   );
//       // }
//       // if (contacts.total > 0) {
//       //   Alert.alert(
//       //     'Your first contact is...',
//       //     `Name: ${contacts.data[0].name}\n` +
//       //     `Phone numbers: ${contacts.data[0].phoneNumbers[0].number}\n` //+
//       //    // `Emails: ${contacts.data[0].emails[0].email}`
//       //   );
//       // }
//     // }
//     //  catch (err) {
//     //   console.warn(err);
//     // }
//     }
    
//   render() {
//     return (
//       <View style={{flex: 1, paddingTop: 40}}>
//         <Button title='Get contacts' onPress={this.requestCameraPermission} />
//       </View>
//     );
//   }
// }

// // import React from 'react';
// // import { StackNavigator } from 'react-navigation';
// // import { StatusBar, View } from 'react-native';
// // import ContactHome from './screens/ContactHome';
// // import ContactDetails from './screens/ContactDetails';

// // export default class App extends React.Component {
// //   constructor() {
// //     super();
// //     StatusBar.setHidden(true);
// //   }
// //   render() {
// //     return (
// //       <ScreenNavigator />
// //     );
// //   }
// // }

// // const ScreenNavigator = StackNavigator({
// //   Home: { screen: ContactHome },
// //   Details: { screen: ContactDetails },
// // })
// // import { Contacts } from 'expo';
// // import com.facebook.react.PackageList;
// // const { data } = await Contacts.getContactsAsync({
// //     fields: [Contacts.Fields.Emails],
// // });

// // if (data.length > 0) {
// //     const contact = data[0];
// //     console.log(contact);
// // }