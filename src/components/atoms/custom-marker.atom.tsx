import { FC } from "react";
import { Svg, G, Path } from "react-native-svg";

interface ICustomMarker {
  x: number;
  y: number;
  color: string;
}

const CustomMarker: FC<ICustomMarker> = (props) => {
  /**
   * Es props.y - 30 està perque sinó es comença a dibuixar el marcador just a on 
   * s'ha pitjat i la part d'abaix apunta a unes cooredenades que no es just a on s'ha pitjat,
   * per tant, amb aquest 30, és com si es començàs a dibuixar per la part d'abaix just allà
   * a on l'usuari ha pitjat...
   */
  return (
    <Svg style={{borderWidth: 10, borderColor: "black"}}>
      <G x={props.x-10.5} y={props.y-30} scale={0.7} >
        <Path
          d="M15 0C6.7 0 0 6.7 0 15c0 8.3 15 27.7 15 27.7S30 23.3 30 15C30 6.7 23.3 0 15 0zm0 22c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"
          fill={props.color}
        />
      </G>
    </Svg>
  );
};

export default CustomMarker;
