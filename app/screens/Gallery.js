import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Button,
  Platform,
  Text,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const imageWidth = windowWidth * 0.9;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.8,
  },
});

const handleTouch = () => {
  console.log("Image touched!");
};

const DisplayAnImage = () => {
  const [url, seturl] = useState(`https://picsum.photos/400/600`);

  const handleButtonPress = () => {
    seturl(`https://picsum.photos/400/600?random=${Math.random()}}`);
  };

  return (
    <View style={styles.container}>
      {/* <Text>{`You are on ${Platform.OS} platform!`}</Text> */}
      <TouchableHighlight onPress={handleTouch}>
        <Image style={styles.image} source={{ uri: url }} />
      </TouchableHighlight>
      <Button title="Next" onPress={handleButtonPress} />
    </View>
  );
};

export default DisplayAnImage;
