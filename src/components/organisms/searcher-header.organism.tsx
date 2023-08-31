import { FC } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../../assets/utils/MainColors";
import Searcher from "../atoms/searcher.atom";

interface ISearcherHeader {
  filter: string;
  handleChangeFilter: (value: string) => void;
}

const SearcherHeader: FC<ISearcherHeader> = (props) => {
  const navigator = useNavigation();

  const handleBack = () => {
    props.handleChangeFilter("");
    navigator.navigate("map");
  }

  return (
    <View style={styles.rootContainer}>
      <Pressable onPress={handleBack}>
        <Icon
          name="arrow-back"
          size={32}
          color={Colors.primary900}
          style={{ marginRight: "3%" }}
        />
      </Pressable>
      <View style={{ flex: 1 }}>
        <Searcher
          disabled={false}
          filter={props.filter}
          handleChangeFilter={props.handleChangeFilter}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "3%",
    marginHorizontal: "5%",
    paddingBottom: "3%",
  },
});

export default SearcherHeader;
