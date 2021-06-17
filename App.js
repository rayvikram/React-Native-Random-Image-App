import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, Platform } from "react-native";
import Crousel from "./app/screens/Gallery";
import Toast from "react-native-toast-message";

// Text -> We use for putting text.  See the https://reactnative.dev/docs/text for more props like props etc
// <Text>{`You are on ${Platform.OS} platform!`}</Text>

export default function App() {
  React.useEffect(() => {
    Toast.show({
      text1: "Hello from Vikram!",
      text2: "There is a surprize after 20 Image!! 👋",
      autoHide: false,
    });
  }, []);
  return (
    // Adds some padding in top, etc
    <SafeAreaView style={styles.container}>
      <Text>Some random image!</Text>
      <Crousel />
      <StatusBar style="auto" />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
