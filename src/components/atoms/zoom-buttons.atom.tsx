import { FC } from "react";
import { View, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import Colors from "../../assets/utils/MainColors";

interface IZoomButtons {
    handleZoomIn: () => void;
    handleZoomOut: () => void;
}

const ZoomButtons: FC<IZoomButtons> = (props) => {
  return (
    <View style={styles.rootContainer}>
        <FAB
          icon="plus"
          style={styles.buttons}
          color="white"
          onPress={props.handleZoomIn}
        />
        <FAB
          icon="minus"
          style={styles.buttons}
          color="white"
          onPress={props.handleZoomOut}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    position: "absolute",
    marginRight: 10,
    marginBottom: 5,
    right: 0,
    bottom: 0,
  },
  buttons: {
    marginBottom: 10,
    backgroundColor: Colors.primary500,
    borderRadius: 10
  },
});

export default ZoomButtons;
