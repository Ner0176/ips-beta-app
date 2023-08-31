import {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import ScreenTitle from '../atoms/screen-title.atom';
import {detectZone} from '../../assets/utils/functions';
import {useTranslation} from 'react-i18next';
import MapBase from '../atoms/map-base.atom';
import MapColorZone from '../atoms/map-color-zone.atom';
import CardInfo from '../atoms/card-info.atom';
import IMapZone from '../../interfaces/map.interface';
import { FAB } from 'react-native-paper';
import { EndpointContext } from '../../contexts/endpoint.context';
import Colors from "../../assets/utils/MainColors";

const InfoScreen = () => {
  const {t} = useTranslation();
  
  const [mapFloor, setMapFloor] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedZone, setSelectedZone] = useState<IMapZone>({
    area: [],
    name: '',
    image: '',
    description: '',
    UIName: '',
  });

  const handleChangeFloor = () => {
    setMapFloor(!!!mapFloor ? 1 : 0);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handlePressIn = (event: any) => {
    const {locationX, locationY} = event.nativeEvent;
    const zone = detectZone(locationX, locationY, mapFloor);
    if (!!zone) {
      setSelectedZone(zone);
      setOpenModal(true);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <ScreenTitle title={t('information.title')} icon={'information'} />
      <View style={styles.mapContainer}>
        <MapBase mapFloor={mapFloor} handlePressIn={handlePressIn}>
          <MapColorZone floor={mapFloor}/>
        </MapBase>
      </View>
      <View style={styles.buttonContainer}>
        <FAB
          icon={!!!mapFloor ? "arrow-up-bold" : "arrow-down-bold"}
          color="white"
          style={styles.button}
          onPress={handleChangeFloor}
        />
      </View>
      <CardInfo
        open={openModal}
        handleClose={handleCloseModal}
        zone={selectedZone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginVertical: '3%',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonContainer: {
    position: "absolute",
    marginRight: 10,
    marginBottom: 5,
    right: 0,
    bottom: 0,
  },
  button: {
    backgroundColor: Colors.primary500,
    borderRadius: 10,
  }
});

export default InfoScreen;
