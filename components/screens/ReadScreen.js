import * as React from 'react';
import {View, Text} from 'react-native';

export default function ReadScreen({navigation}){
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text
                onPress={() => alert("this is home screen")}
                style={{fontSize: 26, fontWeight: 'bold'}}>Home screen
                </Text>
        </View>
    )
}