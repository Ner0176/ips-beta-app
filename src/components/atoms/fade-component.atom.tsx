import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { Animated } from "react-native";

interface IFadeComponent {
  fadeIn?: number;
  fadeOut?: number;
  children: PropsWithChildren<any>;
  styles?: any;
}

const FadeComponent: FC<IFadeComponent> = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  let animations: Animated.CompositeAnimation[] = [];

  if (props.fadeIn && props.fadeOut) {
    animations = [
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: props.fadeIn,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: props.fadeOut,
        useNativeDriver: true,
      }),
    ];
  } else if (props.fadeIn) {
    animations.push(
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: props.fadeIn,
        useNativeDriver: true,
      })
    );
  } else {
    animations.push(
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: props.fadeOut,
        useNativeDriver: true,
      })
    );
  }

  useEffect(() => {
    Animated.sequence(animations).start();
  }, []);

  return (
    <Animated.View style={[{ flex: 1, opacity: fadeAnim }, props.styles]}>
      {props.children}
    </Animated.View>
  );
};

export default FadeComponent;
