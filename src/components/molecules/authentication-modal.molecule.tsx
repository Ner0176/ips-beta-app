import { FC, useContext, useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import {
  Button,
  HelperText,
  Modal,
  Portal,
  TextInput,
} from "react-native-paper";
import Colors from "../../assets/utils/MainColors";
import { login, register } from "../../assets/utils/auth";
import PasswordField from "../atoms/password-field.atom";
import { AuthContext } from "../../contexts/auth.context";
import { useTranslation } from "react-i18next";

interface IAuthenticationModal {
  mode: "login" | "signup";
  open: boolean;
  handleClose: () => void;
  handleChangeAuthentication: () => void;
}

interface ICredentials {
  email: string;
  password: string;
  repeatPassword: string;
}

const initCredentials: ICredentials = {
  email: "",
  password: "",
  repeatPassword: "",
};

const AuthenticationModal: FC<IAuthenticationModal> = (props) => {
  const { t } = useTranslation();
  const authContext = useContext(AuthContext);
  
  const [credentials, setCredentials] = useState<ICredentials>(initCredentials);
  const [errorMessage, setErrorMessage] = useState<string>("");


  const handleChangeMethod = () => {
    setCredentials(initCredentials);
    setErrorMessage("");
    props.handleChangeAuthentication();
  }

  const handleChangeText = (
    text: string,
    label: "email" | "password" | "repeatPassword"
  ) => {
    setCredentials((prevState) => {
      return { ...prevState, [label]: text };
    });
  };

  const handleSubmit = async () => {
    const correctEmail = credentials.email.includes("@");
    if (!!!correctEmail) {
      setErrorMessage(t("authErrors.emailError").toString());
      return;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;
    const strongPassword = regex.test(credentials.password);
    if (!!!strongPassword) {
      setErrorMessage(t("authErrors.passwordNotStrong").toString());
      return;
    }

    if (
      props.mode === "signup" &&
      credentials.repeatPassword !== credentials.password
    ) {
      setErrorMessage(t("authErrors.passwordNotEqual").toString());
      return;
    }

    setErrorMessage("");
    let response: any;
    if (props.mode === "login") {
      response = await login(
        credentials.email.toLowerCase(),
        credentials.password
      );
    } else {
      response = await register(
        credentials.email.toLowerCase(),
        credentials.password
      );
    }
    if(!!!response[0]){
      authContext.authenticate(response.token, response.email);
      props.handleClose();
    } else if(!!response[0]) Alert.alert(t(response[0]), t(response[1]).toString())
    setCredentials(initCredentials);
  };

  return (
    <Portal>
      <Modal
        dismissable
        visible={props.open}
        onDismiss={props.handleClose}
        contentContainerStyle={{
          margin: "5%",
          backgroundColor: "white",
          borderRadius: 5,
        }}
      >
        <View style={styles.loginContainer}>
          <Text style={styles.loginTitle}>
            {props.mode === "login" ? "Inici de sessió" : "Crear nou usuari"}
          </Text>
          <TextInput
            mode="outlined"
            label="Email"
            value={credentials.email}
            style={{ marginBottom: "5%" }}
            onChangeText={(text) => handleChangeText(text, "email")}
            activeOutlineColor={Colors.primary400}
            selectionColor={Colors.secondary200}
          />
          <PasswordField
            check={false}
            password={credentials.password}
            handleChangeText={handleChangeText}
          />
          {props.mode === "login" ? (
            <></>
          ) : (
            <PasswordField
              check={true}
              password={credentials.repeatPassword}
              handleChangeText={handleChangeText}
            />
          )}
          <HelperText
            type="error"
            visible={!!errorMessage}
            padding="none"
            style={{ textAlign: "justify", marginBottom: "2%" }}
          >
            {errorMessage}
          </HelperText>
          <Button
            mode="elevated"
            textColor="white"
            buttonColor={Colors.primary300}
            onPress={handleSubmit}
          >
            {props.mode === "login" ? "Inici de sessió" : "Crear nou usuari"}
          </Button>
          <Button
            textColor={Colors.primary200}
            onPress={handleChangeMethod}
            style={{ marginTop: "2%" }}
          >
            {props.mode === "login" ? "Crear nou usuari" : "Inici de sessió"}
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    margin: "5%",
  },
  loginTitle: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: "5%",
  },
});

export default AuthenticationModal;
