import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Button,
  Platform,
  Text,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image: {
    width: 200,
    height: 300,
  },
});

const handleTouch = () => {
  console.log("Image touched!");
};

const DisplayAnImage = () => {
  const [url, seturl] = useState(`https://picsum.photos/200/300`);

  const handleButtonPress = () => {
    seturl(`https://picsum.photos/200/300?random=${Math.random()}}`);
  };

  return (
    <View style={styles.container}>
      <Text>{`You are on ${Platform.OS} platform!`}</Text>
      <TouchableHighlight onPress={handleTouch}>
        <Image style={styles.image} source={{ uri: url }} />
      </TouchableHighlight>
      <Button title="Next" onPress={handleButtonPress} />
    </View>
  );
};

export default DisplayAnImage;
