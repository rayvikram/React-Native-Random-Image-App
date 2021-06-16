# React Native

- Tutorial - Mosh from YT

## Overview

> We can create React Native App mainly by 2 ways:

- React Native CLI - Structure (will have android, ios, js folders separately) - gives native controls
- Expo CLI - Uses React Native CLI as abstraction and hides the complexity from us - Structure (doesnt have separate folders) - gives only what expo exposes [WE ARE USING THIS IN THIS APP]

> Expo Client - Helps in running the App in Mobile

## Create project

1. `npm install -g expo-cli` - Install expo if not installed
2. `expo init OlxClone` - Select blank and it will create a base structure of the app

## Project Structure

|--assets/ - have all assets like audio Video
|--App.js - Base Component

## Notes

1. In react native we have to use components that react-native provides. Eg: Text, View

- View will mapped to UIView for IOS || View will be mapped to UIView for Android

2. Command to start the app

   > `nom start`

3. It uses metro Bundler
4. Emulator
   > We can use Android emulator to run our React Native app
