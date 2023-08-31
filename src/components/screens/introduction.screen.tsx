import { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import FadeComponent from "../atoms/fade-component.atom";

const IntroductionScreen = ({ navigation }: any) => {
  const imageProps = {
    fadeIn: 2000,
    fadeOut: 2000,
    styles: styles.fadeContainer,
  };

  const moveToMapScreen = () => {
    navigation.navigate("menu");
  };

  useEffect(() => {
    setTimeout(
      moveToMapScreen, 
      imageProps.fadeIn + 1000 + imageProps.fadeOut
    );
  }, []);

  return (
    <View style={styles.imageContainer}>
      <FadeComponent {...imageProps}>
        <Image
          source={require("../../assets/images/logo-uib.png")}
          style={styles.image}
        />
      </FadeComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "70%",
  },
  fadeContainer: {
    justifyContent: "center",
  },
});

export default IntroductionScreen;
