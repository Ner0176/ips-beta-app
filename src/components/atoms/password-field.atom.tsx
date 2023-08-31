import { FC, useState } from "react";
import { TextInput } from "react-native-paper";
import Colors from "../../assets/utils/MainColors";

interface IPasswordField {
  password: string;
  handleChangeText: (
    text: string,
    label: "password" | "repeatPassword"
  ) => void;
  check: boolean;
}

const PasswordField: FC<IPasswordField> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (text: string) => {
    if(!!!props.check) props.handleChangeText(text, "password");
    else props.handleChangeText(text, "repeatPassword");
  };

  return (
    <TextInput
      mode="outlined"
      label={!!!props.check ? "Contrasenya" : "Repeteix la contrasenya"}
      value={props.password}
      onChangeText={handleChange}
      style={{ marginBottom: props.check ? "0%" : "5%" }}
      secureTextEntry={!showPassword}
      right={
        <TextInput.Icon
          icon={showPassword ? "eye" : "eye-off"}
          onPress={() => setShowPassword((prevState) => !prevState)}
        />
      }
      activeOutlineColor={Colors.primary400}
      selectionColor={Colors.secondary200}
    />
  );
};

export default PasswordField;
