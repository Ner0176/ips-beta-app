import { FC } from "react";
import { Pressable, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Language } from "../molecules/language-icon.molecule";
import { useTranslation } from "react-i18next";

interface ILanguageItem {
  currentLanguage: Language;
  itemLanguage: Language;
  changeLanguage: (lang: Language) => void;
}

const LanguageItem: FC<ILanguageItem> = (props) => {
  const { t, i18n } = useTranslation();
  const url =
    props.itemLanguage === "español"
      ? require("../../assets/images/spanish-flag.png")
      : require("../../assets/images/catalan-flag.png");
  return (
    <Pressable
      onPress={() => {
        props.changeLanguage(props.itemLanguage);
        i18n.changeLanguage(props.itemLanguage.slice(0, 2));
      }}
    >
      <Image
        source={url}
        style={[
          styles.image,
          props.itemLanguage === props.currentLanguage
            ? styles.selectedLanguage
            : null,
        ]}
      />
      <Text
        variant="headlineSmall"
        style={[
          styles.languageLabel,
          props.itemLanguage === props.currentLanguage
            ? {fontWeight: "bold"}
            : null,
        ]}
      >
        {t(
          `user.languages.${
            props.itemLanguage === "catalan" ? "catalan" : "spanish"
          }`
        )}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
  },
  selectedLanguage: {
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 100,
    height: 120,
    width: 120,
  },
  languageLabel: {
    marginTop: 20,
    textAlign: "center",
    color: "black"
  },
});

export default LanguageItem;
