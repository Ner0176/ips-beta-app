import {Rect} from 'react-native-svg';
import mapZones, {mallBase, mallFirst} from '../../assets/utils/zones';
import {FC, useEffect, useState} from 'react';
import IMapZone from '../../interfaces/map.interface';

interface IMapColorZone {
  floor: number;
}

const MapColorZone: FC<IMapColorZone> = ({floor}) => {
  const [zones, setZones] = useState<IMapZone[]>(mallBase);

  useEffect(() => {
    setZones(!!!floor ? mallBase : mallFirst);
  }, [floor]);

  const colors = ['green', 'red', 'violet', 'orange', 'blue'];
  return (
    <>
      {zones.map((item, idx) => {
        if (
          item.name.toLowerCase().includes('street') ||
          item.name.toLowerCase().includes('stair') || 
          item.name.toLowerCase().includes('elevator')
        )
          return;
        return item.area.map(areas => {
          return (
            <Rect
              id={item.name}
              x={areas.x}
              y={areas.y}
              width={areas.width}
              height={areas.height}
              fill={'red'}
              opacity={0.6}
            />
          );
        });
      })}
    </>
  );
};

export default MapColorZone;
