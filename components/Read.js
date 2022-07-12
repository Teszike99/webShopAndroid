import * as React from 'react';
import { View, Text } from 'react-native-web';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { collection, doc, setDoc, addDoc} from "firebase/firestore"; 
import {db} from './components/confit';
import { useState } from 'react';

export default function Read(){
  
        const [data, setData] = useState('')
        function create(){
          console.log(data)
          //submit data
          addDoc(collection(db, "products"), {
            name: data,
            descrypt: data,
            quantity: 7
          }).then(() => {
            //Data saved succesfully!
            console.log('data submitted')
          })
        
    return (
        <View style={styles.container}>
        <Text>Hello wld$</Text>
        <TextInput placeholder="data" onChangeText={(data) => {setData(data)}} style={styles.textBoxes}></TextInput>
        <button onClick={create}>submit</button>
        <StatusBar style="auto" />
      </View>
    );
}
};





// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     textBoxes: {
//       width: '90%',
//       fontSize: 18,
//       padding: 12,
//       borderColor: 'gray',
//       borderWidth: 0.2,
//       borderRadius: 10
//     }
//   });
  

//   <View style={styles.container}>
//   <Text>Hello wld$</Text>
//   <TextInput placeholder="data" onChangeText={(data) => {setData(data)}} style={styles.textBoxes}></TextInput>
//   <button onClick={create}>submit</button>
//   <StatusBar style="auto" />
// </View>


// const [data, setData] = useState('')
// function create(){
//   //submit data
//   updateDoc(doc(db, "products", "Rgu3SNG00cHeKUyMwTP6"), {
//     name: data,
//     descrypt: data,
//     quantity: 7
//   }).then(() => {
//     //Data saved succesfully!
//     console.log('data submitted')
//   })
// }
