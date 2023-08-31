import { useState, useCallback } from "react";
import { View } from "react-native";
import SearcherHeader from "../organisms/searcher-header.organism";
import SearcherContent from "../organisms/searcher-content.organism";
import IMapZone from "../../interfaces/map.interface";
import { useFocusEffect } from "@react-navigation/native";
import mapZones, { mallBase, mallFirst } from "../../assets/utils/zones";

const SearcherScreen = () => {
  const [userFilter, setUserFilter] = useState<string>("");
  const [allZones, setAllZones] = useState<IMapZone[]>([]);
  const [filteredData, setFilteredData] = useState<IMapZone[]>([]);

  const handleChangeFilter = (value: string) => {
    if (value === "") setFilteredData(allZones);
    else {
      const valueLC = value.toLocaleLowerCase();
      const newData = allZones.filter((item) =>
        item.UIName.toLocaleLowerCase().includes(valueLC)
      );
      setFilteredData(newData);
    }
    setUserFilter(value);
  };

  useFocusEffect(
    useCallback(() => {
      const allZones: IMapZone[] = [...mallBase, ...mallFirst];
      const realZones = allZones.filter((item) => !!!item.name.toLowerCase().includes("street"));
      setAllZones(realZones);
      setFilteredData(allZones);
      setUserFilter("");
    }, [])
  );

  return (
    <View style={{ flex: 1 }}>
      <SearcherHeader
        filter={userFilter}
        handleChangeFilter={handleChangeFilter}
      />
      <SearcherContent data={filteredData} />
    </View>
  );
};

export default SearcherScreen;
