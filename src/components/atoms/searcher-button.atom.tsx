import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Colors from '../../assets/utils/MainColors';

interface ISearcherButton {
  showButton: boolean;
  iconName: any;
  handleClick: () => void;
}

const SearcherButton: FC<ISearcherButton> = props => {
  return (
    <>
      {props.showButton && (
        <Button
          mode="text"
          style={styles.button}
          labelStyle={styles.buttonIcon}
          icon={props.iconName}
          onPress={props.handleClick}>
          {' '}
        </Button>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 32,
    marginRight: 0,
    color: Colors.primary700,
  },
});

export default SearcherButton;
