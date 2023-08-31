import {View, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MapContent from '../organisms/map-content.organism';
import MapHeader from '../organisms/map-header.organism';
import {useState} from 'react';

const MapScreen = () => {
  const [mapFloor, setMapFloor] = useState<number>(0);

  const handleChangeFloor = () => {
    setMapFloor(!!!mapFloor ? 1 : 0);
  };

  return (
    <View style={styles.rootContainer}>
      <MapHeader handleChangeFloor={handleChangeFloor} />
      <GestureHandlerRootView style={{flex: 1}}>
        <MapContent mapFloor={mapFloor} handleChangeFloor={handleChangeFloor} />
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default MapScreen;
