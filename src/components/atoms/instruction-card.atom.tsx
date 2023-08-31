import {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {IInstructions, IPoint, IconDirection} from '../../interfaces/map.interface';
import {useTranslation} from 'react-i18next';
import Tts from 'react-native-tts';

interface ICardInstruction {
  instructions: IInstructions[];
  route: IPoint[];
}

const InstructionCard: FC<ICardInstruction> = ({instructions, route}) => {
  const {t} = useTranslation();
  const [message, setMessage] = useState<string>('');
  const [icon, setIcon] = useState<string>('arrow-up');


  const createMessage = (distance: number, direction: string) => {
    return `${t('map.instruction', {
      distance: distance.toFixed(2).replace(".", ","),
    })}${t(`map.${direction}`)}`;
  }

  const comparer = (route: IPoint, pos: IPoint) => {
    return route.x === pos.x && route.y === pos.y;
  }

  useEffect(() => {
    if(route.length < 1 || instructions.length < 1) return;

    for(let i = 0; i < instructions.length; i++) {
      const samePos = comparer(route[0], instructions[i].point);
      if(samePos) {
        const {direction, distance} = instructions[i];

        const directionKey = Object.keys(IconDirection).find(item => {
          if (item === direction) return item;
        });
        setIcon(IconDirection[directionKey]);

        const newMessage = createMessage(distance, directionKey);
        Tts.speak(newMessage);
        setMessage(newMessage);
        break;
      }
    }
  }, [route])

  return (
    <View style={styles.instructionsContainer}>
      {instructions.length > 0 ? (
        <View style={styles.instructions}>
          <Icon name={icon} size={32} color="black" style={styles.icon} />
          <Text style={styles.text}>{message}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  instructionsContainer: {
    width: '100%',
    height: '15%',
    justifyContent: 'flex-start',
    padding: '3%',
  },
  instructions: {
    height: '100%',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 10,
    opacity: 1,
    paddingHorizontal: '4%',
  },
  icon: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    flex: 4,
  },
});

export default InstructionCard;
