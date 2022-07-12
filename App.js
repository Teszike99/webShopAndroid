import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { collection, doc, setDoc, addDoc} from "firebase/firestore"; 
import {db} from './components/confit';
import { useState } from 'react';


export default function App() {
  
  return (
    <Read/>
  );
}
