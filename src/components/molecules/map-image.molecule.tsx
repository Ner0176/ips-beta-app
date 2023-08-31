import {Circle, Polyline} from 'react-native-svg';
import Colors from '../../assets/utils/MainColors';
import CustomMarker from '../atoms/custom-marker.atom';
import MapBase from '../atoms/map-base.atom';
import {FC, useContext} from 'react';
import {EndpointContext} from '../../contexts/endpoint.context';
import {IPoint, IUserPos} from '../../interfaces/map.interface';
const trilateration = require('node-trilateration');

interface IMapImage {
  mapFloor: number;
  position: IUserPos;
  points: IPoint[];
  handlePressIn: (event: any) => void;
}

const MapImage: FC<IMapImage> = props => {
  const endpointCtx = useContext(EndpointContext);
  const endpoint = endpointCtx.endpoint;
  const userPos = props.position.pos;

  return (
    <MapBase mapFloor={props.mapFloor} handlePressIn={props.handlePressIn}>
      {endpoint.enabled && (
        <>
          <Polyline
            points={props.points
              .map((point: any) => `${point.x},${point.y}`)
              .join(' ')}
            fill="none"
            stroke={Colors.secondary300}
            strokeWidth="2"
          />
          {props.mapFloor === endpoint.floor && (
            <>
              <Circle
                cx={endpoint.x}
                cy={endpoint.y}
                r="3"
                fill={Colors.primary400}
              />
              <CustomMarker
                x={endpoint.x}
                y={endpoint.y}
                color={Colors.primary800}
              />
            </>
          )}
        </>
      )}
      {props.position.floor === props.mapFloor && (
        <>
          <Circle
            cx={userPos.x}
            cy={userPos.y}
            r="6"
            fill="transparent"
            stroke={Colors.primary400}
          />
          <Circle cx={userPos.x} cy={userPos.y} r="4" fill="red" />
          <Circle
            cx={userPos.x}
            cy={userPos.y}
            r="6"
            fill="transparent"
            stroke="red"
          />
        </>
      )}
    </MapBase>
  );
};

export default MapImage;
