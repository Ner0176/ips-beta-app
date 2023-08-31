import {FC, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Text as RNPText} from 'react-native-paper';
import Colors from '../../assets/utils/MainColors';
import {AuthContext} from '../../contexts/auth.context';

interface IUserAuth {
  handleOpenLogin: () => void;
  handleOpenRegister: () => void;
}

const UserAuthentication: FC<IUserAuth> = props => {
  const {t} = useTranslation();
  const authContext = useContext(AuthContext);

  return (
    <View style={styles.rootContainer}>
      <RNPText variant="headlineMedium" style={styles.subtitle}>
        {t('user.auth.title')}
      </RNPText>
      <Text style={{textAlign: 'justify'}}>
        <Text style={styles.boldText}>{t('user.auth.info-title')}: </Text>
        {t('user.auth.info')}
      </Text>

      <View style={styles.buttonsContainer}>
        {!!!authContext.token ? (
          <>
            <Button
              mode="elevated"
              buttonColor={Colors.primary500}
              textColor="white"
              style={{marginRight: '5%'}}
              onPress={props.handleOpenLogin}>
              {t('user.auth.signIn')}
            </Button>
            <Button
              mode="elevated"
              buttonColor={Colors.primary300}
              textColor="white"
              onPress={props.handleOpenRegister}>
              {t('user.auth.register')}
            </Button>
          </>
        ) : (
          <Button
            mode="elevated"
            buttonColor={Colors.primary500}
            textColor="white"
            style={{marginRight: '5%'}}
            onPress={() => {
              authContext.logout();
            }}>
            {t('user.auth.signOut')}
          </Button>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: '5%',
    textAlign: 'justify',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 25,
  },
});

export default UserAuthentication;
