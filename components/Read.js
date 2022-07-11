import * as React from 'react';
import { View, Text } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import ReadScreen from './screens/ReadScreen';
import CreateScreen from './screens/CreateScreen';

// Screen names
const readName = 'Read';
const create = 'Create';

export default function Read(){
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={readName} 
            screenOption={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === readName){
                        iconName = Focused ? 'home' : 'home-outline'
                    } else if (rn === create) {
                        iconName = focused ? 'settings' : 'settings-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                },
            })}>
              <Tab.Screen name={homeName} component={HomeScreen}/>
              
                </Tab.Navigator>
        </NavigationContainer>
    );
}





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
