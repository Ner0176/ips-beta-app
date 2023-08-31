import { useCallback, useContext, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ActivityIndicator, List } from "react-native-paper";
import SearcherListItem from "../molecules/searcher-list-item.molecule";
import IMapZone from "../../interfaces/map.interface";
import { getFavList } from "../../assets/utils/api";
import { AuthContext } from "../../contexts/auth.context";
import { useFocusEffect } from "@react-navigation/native";
import Colors from "../../assets/utils/MainColors";

const FavouriteContent = () => {
  const authContext = useContext(AuthContext);
  const [zones, setZones] = useState<IMapZone[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        setLoading(true);
        const data: IMapZone[] | null = await getFavList(authContext.email);
        if (data) setZones(data);
        setLoading(false);
      })();
    }, [])
  );

  return (
    <View style={styles.rootContainer}>
      {!!loading ? (
        <ActivityIndicator size="large" color={Colors.primary400} />
      ) : (
        <List.Section>
          <FlatList
            data={zones}
            renderItem={({ item, index }) => {
              const last = index !== zones.length - 1 ? true : false;
              return (
                <SearcherListItem
                  zone={item}
                  last={last}
                  component="favourite"
                />
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </List.Section>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default FavouriteContent;
