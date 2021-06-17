import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Gallery from "./features/Gallery";
// Text -> We use for putting text.  See the https://reactnative.dev/docs/text for more props like props etc

export default function App() {
  return (
    // Adds some padding in top, etc
    <SafeAreaView style={styles.container}>
      <Text>Some random image!</Text>
      <Gallery />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
