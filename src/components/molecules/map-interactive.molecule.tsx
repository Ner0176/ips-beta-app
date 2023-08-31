import {FC} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  SharedValue,
} from 'react-native-reanimated';
import MapImage from '../molecules/map-image.molecule';
import {StyleSheet} from 'react-native';
import { IPoint, IUserPos } from '../../interfaces/map.interface';

interface IMapInteractive {
  mapFloor: number;
  scale: SharedValue<number>;
  savedScale: SharedValue<number>;
  position: IUserPos;
  points: IPoint[];
  handlePressIn: (event: any) => void;
}

const MapInteractive: FC<IMapInteractive> = props => {
  const positionX = useSharedValue(0);
  const endPositionX = useSharedValue(0);
  const positionY = useSharedValue(0);
  const endPositionY = useSharedValue(0);

  // const rotation = useSharedValue(700);
  // const savedRotation = useSharedValue(700);

  // const rotationGesture = Gesture.Rotation()
  //   .onUpdate(e => {
  //     rotation.value = savedRotation.value + e.rotation;
  //   })
  //   .onEnd(() => {
  //     savedRotation.value = rotation.value;
  //   });

  const panGesture = Gesture.Pan()
    .minDistance(50)
    .onUpdate(e => {
      const maxXValue = 50;
      const maxYValue = 50;
      const minXValue = -50;
      const minYValue = -50;

      let newXValue = e.translationX + endPositionX.value;
      let newYValue = e.translationY + endPositionY.value;

      if (newXValue > maxXValue) newXValue = maxXValue;
      else if (newXValue < minXValue) newXValue = minXValue;

      positionX.value = newXValue;

      if (newYValue > maxYValue) newYValue = maxYValue;
      else if (newYValue < minYValue) newYValue = minYValue;

      positionY.value = newYValue;
    })
    .onEnd(e => {
      endPositionX.value = positionX.value;
      endPositionY.value = positionY.value;
    });

  const pinchGesture = Gesture.Pinch()
    .onUpdate(e => {
      const maxValue = 3;
      const minValue = 1;
      let newValue = props.savedScale.value * e.scale;
      if (newValue > maxValue) newValue = maxValue;
      else if (newValue < minValue) newValue = minValue;
      props.scale.value = newValue;
    })
    .onEnd(() => {
      props.savedScale.value = props.scale.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {scale: props.scale.value},
      {translateX: positionX.value},
      {translateY: positionY.value},
      // {rotateZ: `90deg`},
      // {rotateZ: `${(rotation.value / Math.PI) * 180}deg`},
    ],
  }));

  const mix = Gesture.Race(pinchGesture, panGesture);

  return (
    <GestureDetector gesture={mix}>
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        <MapImage
          mapFloor={props.mapFloor}
          points={props.points}
          position={props.position}
          handlePressIn={props.handlePressIn}
        />
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    height: 450,
    width: 297,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapInteractive;
