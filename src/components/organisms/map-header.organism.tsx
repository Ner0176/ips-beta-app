import {FC, useContext} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../assets/utils/MainColors';
import {EndpointContext} from '../../contexts/endpoint.context';
import Searcher from '../atoms/searcher.atom';
import {useNavigation} from '@react-navigation/native';

interface IMapHeader {
  handleChangeFloor: () => void;
}

const MapHeader: FC<IMapHeader> = ({ handleChangeFloor }) => {
  const navigator = useNavigation();

  const endpointCtx = useContext(EndpointContext);
  const { floor, enabled } = endpointCtx.endpoint;

  const changeToSearcherList = () => {
    navigator.navigate('searcher');
  };

  return (
    <View style={styles.rootContainer}>
      <Pressable onPress={handleChangeFloor}>
        <Icon
          name={!!!floor ? "arrow-up-circle" : "arrow-down-circle"}
          size={37}
          color={Colors.primary800}
          style={{marginRight: '3%'}}
        />
      </Pressable>
      <Pressable onPress={endpointCtx.handleEndpointStatus}>
        <Icon
          name="map-marker"
          size={35}
          color={!!!enabled ? Colors.primary800 : Colors.secondary300}
          style={{marginRight: '3%'}}
        />
      </Pressable>
      <Pressable
        onPress={changeToSearcherList}
        style={styles.searcherContainer}>
        <Searcher disabled={true} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginVertical: '3%',
  },
  searcherContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MapHeader;
