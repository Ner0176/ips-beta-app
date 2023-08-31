import {FC, useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ZoomButtons from '../atoms/zoom-buttons.atom';
import InstructionCard from '../atoms/instruction-card.atom';
import {useSharedValue} from 'react-native-reanimated';
import MapInteractive from '../molecules/map-interactive.molecule';
import {EndpointContext} from '../../contexts/endpoint.context';
import {
  getPathWithA,
  pathBetweenFloors,
  sleep,
} from '../../assets/utils/functions';
import {IInstructions, IRoute, IUserPos} from '../../interfaces/map.interface';

interface IMapContent {
  mapFloor: number;
  handleChangeFloor: () => void;
}

const initNewRoute: IRoute = {
  route: [],
  floor: 0,
};

const MapContent: FC<IMapContent> = ({mapFloor, handleChangeFloor}) => {
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const endpointCtx = useContext(EndpointContext);
  const endpoint = endpointCtx.endpoint;

  const [instructions, setInstructions] = useState<IInstructions[]>([]);
  const [routes, setRoutes] = useState<IRoute[]>([]);
  const [newRoute, setNewRoute] = useState<IRoute>(initNewRoute);
  const [position, setPosition] = useState<IUserPos>({
    pos: {
      x: 25 + 3,
      y: 400 + 2,
    },
    floor: 0,
  });

  useEffect(() => {
    let isUnmounted = false;
    (async () => {
      for (let i = 0; i < routes.length; i++) {
        for (let j = 1; j < routes[i].route.length; j++) {
          if (isUnmounted) break;
          setPosition({pos: routes[i].route[j], floor: routes[i].floor});
          setNewRoute({
            route: routes[i].route.slice(j),
            floor: routes[i].floor,
          });
          await sleep(100);
        }
        if(routes[i].floor !== endpoint.floor) {
          const totalLenght = routes[i].route.length;
          setPosition({pos: routes[i].route[totalLenght - 1], floor: endpoint.floor});
          setRoutes(routes.slice(1));
          handleChangeFloor();
        } else {
          await sleep(3000);
          setInstructions([]);
        }
      }
    })();
    return () => {
      isUnmounted = true;
    };
  }, [routes]);

  useEffect(() => {
    if (!!!endpoint.enabled) {
      setRoutes([]);
      setInstructions([]);
      setNewRoute(initNewRoute);
    } else if (endpoint.x > 0 && endpoint.y > 0) {
      let path: IRoute[] = [],
        instructions: IInstructions[] = [];
      const start = {x: position.pos.x, y: position.pos.y};
      const goal = {x: endpoint.x, y: endpoint.y};

      if (endpoint.floor === position.floor) {
        const pathData = getPathWithA(start, goal, endpoint.floor);
        path = [{route: pathData.path, floor: position.floor}];
        instructions = pathData.instructions;
      } else {
        const pathData = pathBetweenFloors(
          start,
          goal,
          position.floor,
          endpoint.floor,
        );
        if (pathData.length > 1) {
          path = [
            {route: pathData[0].path, floor: position.floor},
            {route: pathData[1].path, floor: endpoint.floor},
          ];
          instructions = [
            ...pathData[0].instructions,
            ...pathData[1].instructions,
          ];
        }
      }

      setRoutes(path);
      setNewRoute(path[0]);
      setInstructions(instructions ?? []);

      if (endpoint.floor !== position.floor) handleChangeFloor();
    }
  }, [endpoint]);

  const handlePressIn = (event: any) => {
    if (endpoint.enabled) {
      const {locationX, locationY} = event.nativeEvent;
      setRoutes([]);
      endpointCtx.updateEndpoint(locationX, locationY, mapFloor);
    }
  };

  const handleZoomIn = () => {
    if (scale.value + 0.25 > 3) {
      scale.value = 3;
    } else {
      scale.value = scale.value + 0.25;
    }
    savedScale.value = scale.value;
  };

  const handleZoomOut = () => {
    if (scale.value - 0.25 < 1) {
      scale.value = 1;
    } else {
      scale.value = scale.value - 0.25;
    }
    savedScale.value = scale.value;
  };

  return (
    <View style={styles.rootContainer}>
      <MapInteractive
        mapFloor={mapFloor}
        scale={scale}
        savedScale={savedScale}
        position={position}
        points={
          position.floor === mapFloor
            ? newRoute.route
            : routes.length > 1 && !!routes[mapFloor]
            ? routes[mapFloor].route
            : []
        }
        handlePressIn={handlePressIn}
      />
      <InstructionCard instructions={instructions} route={newRoute.route} />
      <ZoomButtons handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    height: 300,
    width: 450,
  },
  animatedContainer: {
    height: 450,
    width: 297,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapContent;
