# React Native Random Image Generator

- try it - https://expo.io/@vikramray/ReactNativeRandomImage
  ![Demo Image](./demo/demo.gif)

# React Native

- Tutorial - Mosh from YT - https://youtu.be/0-S5a0eXPoc

## Overview

> We can create React Native App mainly by 2 ways:

- React Native CLI - Structure (will have android, ios, js folders separately) - gives native controls
- Expo CLI - Uses React Native CLI as abstraction and hides the complexity from us - Structure (doesnt have separate folders) - gives only what expo exposes [WE ARE USING THIS IN THIS APP]

> Expo Client - Helps in running the App in Mobile

> Every components that we import and use in code, while building or compiling the component is converted to IOS or Android component

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

   > `npm start`

3. It uses metro Bundler
4. Emulator & Running on mobile
   1. We can use Android emulator to run our React Native app. Cmd: ctrl+m to open the dev tools.
   2. We can also download Expo client and scan the QR on the bundler screen, it will open the app. Shake the device to open the dev menu. (Make sure laptop and mobile are on same network)
5. Logging & Debugging
   1. Use console.log() to view logs
   2. If using Android emulator, enable remote js execution and visit the chrome console. You will see the error logs. Further, you can go to sources and emable `pause on exception` and `pause on caught exception`. Also use breakpoints and watch and other utils.
6. Debugging in VS code
   - from side menu, select debugger and lauch a launch.json file
   - from debug dropdown, select a configuration and run it. View the logs from `View->Debug Console`
7. Publishing to Expo store

   - Click the publish with Expo from on the Metro Bundler and follow the instruction in Terminal and Create an account

8. Core & docs components (see code for more details)

   - View - like a div
   - Text
   - Image - For local static image we dont have to give dimentions, but for network images we need to give. dimention. some props: stretch, style, etc
   - Button
   - Touchable - We can create any element as touchable and perform various effects like bluring, opacity on touch etc. Some type of touchables are - TouchableWithoutFeedback, TouchableHighlight etc and these components have onPress, onHold, etc
   - Alert - we can use js alert, or React Native Alert.alert("Title", "message"), etc
   - SafeAreaView - defence against Notch, etc (only on IOS)
   - StyleSheet - we pass an object of styles and it returns object. Benefit: It validates and give error if some JS/CSS is misspelled.
   - etc - Dimentions, Platform,

9. I started Expo and opened the app in web-browser only. And also downloaded the Expo from Play Store and runnning this app in my mobile.
10. use react-native-hooks for extra functionality like getting dimentions, etc
11. We can also use flexbox -flex, flexDirection='column' by default in ReactNative because we generally use mobile in portraid mode, justifyContent, etc. NOTE: (_+_) -> justifyContent (main axis), alignItems (secondary axis)
12. TODO: do a flex refresher (from the Mosh YT video or anywhere) because we use flex a lot in RN app.
