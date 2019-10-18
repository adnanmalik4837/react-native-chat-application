import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Linking} from 'react-native';
async function showFirstContactAsync() {
    //PermissionsAndroid.request( PermissionsAndroid.PERMISSIONS.READ_CONTACTS).then(() => {
        //alert(JSON.stringify("Permission was success..."));
         Linking.openURL('content://com.android.contacts/contacts')
      //    });

}
const GoalItem=props =>{
    return (//onPress={props.onDelete.bind(this,props.id)}
    <TouchableOpacity activeOpacity={0.8} onPress={showFirstContactAsync}>
    <View style={styles.listitem}>
        <Text>{props.title}</Text>
        </View></TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    listitem:
    {
   padding:10,
   marginVertical:10,
   backgroundColor:'#ccc',
   borderColor:'black',
   borderWidth:1
    }
   });
   
export default GoalItem;