import './api';
import { registerRootComponent } from 'expo';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from 'native-base';

const App = () => (
  <NativeBaseProvider>
    <Box>Hello world</Box>
    <StatusBar style="auto" />
  </NativeBaseProvider>
);

registerRootComponent(App);
