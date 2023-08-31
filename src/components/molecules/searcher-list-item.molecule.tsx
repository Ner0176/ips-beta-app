import {FC, useCallback, useContext, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {List, Divider} from 'react-native-paper';
import IMapZone from '../../interfaces/map.interface';
import {EndpointContext} from '../../contexts/endpoint.context';
import {AuthContext} from '../../contexts/auth.context';
import {addFavZone, deleteFavZone, findIsFav} from '../../assets/utils/api';
import {useTranslation} from 'react-i18next';
import SearcherButton from '../atoms/searcher-button.atom';
import Colors from '../../assets/utils/MainColors';
import { detectZone } from '../../assets/utils/functions';

interface ISearcherListItem {
  zone: IMapZone;
  last: boolean;
  component: 'favourite' | 'searcher';
}

const SearcherListItem: FC<ISearcherListItem> = props => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const endpointCtx = useContext(EndpointContext);
  const authContext = useContext(AuthContext);

  const [isFav, setIsFav] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        if(!!!authContext.token) setIsFav(false);
        if (props.component === 'searcher' && !!authContext.token) {
          const payload = {
            email: authContext.email,
            zoneName: props.zone.name,
          };
          const fav = await findIsFav(payload);
          setIsFav(fav);
        }
      })();
    }, [authContext.email]),
  );

  const handleGoTo = () => {
    const endpointX = props.zone.area[0].x + props.zone.area[0].width / 2;
    const endpointY = props.zone.area[0].y + props.zone.area[0].height / 2;
    const baseZone = detectZone(endpointX, endpointY, 0);
    const zoneFloor = !!baseZone && baseZone.name === props.zone.name ? 0 : 1;
    endpointCtx.updateEndpoint(endpointX, endpointY, zoneFloor, true);
    navigation.navigate('map');
  };

  const handleFav = async () => {
    if (props.component === 'searcher' && !!!authContext.token) {
      Alert.alert(
        t('signInError.title'),
        t('signInError.description').toString(),
        [
          {
            text: t('signInError.accept').toString(),
            onPress: () => {
              navigation.navigate('user');
            },
          },
          {
            text: t('signInError.cancel').toString(),
          },
        ],
      );
      return;
    }
    if (isFav) {
      setIsFav(false);
      const payload = {
        email: authContext.email,
        zoneName: props.zone.name,
      };
      await deleteFavZone(payload);
    } else {
      setIsFav(true);
      const payload = {
        email: authContext.email,
        zone: props.zone,
      };
      await addFavZone(payload);
    }
  };

  return (
    <>
      <List.Item
        title={props.zone.UIName}
        descriptionEllipsizeMode="tail"
        left={() => (
          <List.Icon
            color={Colors.primary900}
            icon="map-marker"
            style={{marginRight: '2%'}}
          />
        )}
        right={() => (
          <>
            <SearcherButton
              showButton={props.component === 'favourite' ? false : true}
              iconName={!!isFav ? 'star' : 'star-outline'}
              handleClick={handleFav}
            />
            <SearcherButton
              showButton={true}
              iconName={'arrow-right-circle'}
              handleClick={handleGoTo}
            />
          </>
        )}
        style={styles.item}
        onPress={() => {}}
      />
      {props.last && <Divider />}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingLeft: '8%',
    paddingRight: '2%',
  },
});

export default SearcherListItem;
