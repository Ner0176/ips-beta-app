import {FC, PropsWithChildren} from 'react';
import Svg, {Image} from 'react-native-svg';
import plantaBaja from '../../assets/images/centro-comercial-0.png';
import planta1 from '../../assets/images/centro-comercial-1.png';

interface IMapBase {
  mapFloor: number,
  handlePressIn: (event: any) => void;
}

const MapBase: FC<PropsWithChildren<IMapBase>> = (props) => {
  return (
    <Svg
      height={500} //125
      width={350} //87.5
      onPressIn={props.handlePressIn}
      style={{overflow: 'visible'}}>
      <Image href={!!!props.mapFloor ? plantaBaja : planta1} height={500} width={350} />
      {props.children}
    </Svg>
  );
};

export default MapBase;
