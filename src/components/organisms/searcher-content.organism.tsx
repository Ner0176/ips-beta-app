import { FC } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Divider, List } from "react-native-paper";
import SearcherListItem from "../molecules/searcher-list-item.molecule";
import IMapZone from "../../interfaces/map.interface";

interface ISearcherContent {
  data: IMapZone[];
}

const SearcherContent: FC<ISearcherContent> = (props) => {
  return (
    <View style={styles.rootContainer}>
      <Divider horizontalInset={true} bold={true} />
      <List.Section>
        <FlatList
          data={props.data}
          renderItem={({ item, index }) => {
            const last = index !== props.data.length - 1 ? true : false;
            return <SearcherListItem zone={item} last={last} component="searcher"/>;
          }}
          keyExtractor={(item) => item.name}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default SearcherContent;
