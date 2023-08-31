import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../assets/utils/MainColors";

interface IScreenTitle {
    title: string;
    icon: any;
}

const ScreenTitle: FC<IScreenTitle> = (props) => {
  return (
    <>
      <View style={styles.rootContainer}>
        <Icon
          name={props.icon}
          size={40}
          color={Colors.primary300}
        />
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <Divider horizontalInset={true} bold={true}/>
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2%",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: "3%",
    color: "black"
  },
});

export default ScreenTitle;
