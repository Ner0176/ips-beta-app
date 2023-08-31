import { useState } from "react";
import { View, StyleSheet } from "react-native";
import AuthenticationModal from "../molecules/authentication-modal.molecule";
import LanguageIcons from "../molecules/language-icon.molecule";
import UserAuthentication from "../molecules/user-authentication.molecule";

const UserContent = () => {

  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showRegister, setShowRegister] = useState<boolean>(false);

  const handleOpenLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleOpenRegister = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const handleChangeAuthentication = () => {
    setShowLogin((prevValue) => !prevValue);
    setShowRegister((prevValue) => !prevValue);
  };

  return (
    <View style={styles.rootContainer}>
      <UserAuthentication handleOpenLogin={handleOpenLogin} handleOpenRegister={handleOpenRegister}/>
      <LanguageIcons />
      <AuthenticationModal
        open={showLogin}
        handleClose={handleCloseLogin}
        mode="login"
        handleChangeAuthentication={handleChangeAuthentication}
      />
      <AuthenticationModal
        open={showRegister}
        handleClose={handleCloseRegister}
        mode="signup"
        handleChangeAuthentication={handleChangeAuthentication}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default UserContent;
