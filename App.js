import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { collection, doc, setDoc, addDoc, updateDoc } from "firebase/firestore"; 
import {db} from './components/confit';
import { useState } from 'react';

import Read from './components/Read'

export default function App() {

  return (
    <view>
         <Read/>
    </view>
  );
}

