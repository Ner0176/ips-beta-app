import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import LanguageItem from "../atoms/language-item.atom";
import { EndpointContext } from "../../contexts/endpoint.context";

export type Language = "español" | "catalan";

const LanguageIcons = () => {
  const { t } = useTranslation();
  const endpointCtx = useContext(EndpointContext);
  const endpoint = endpointCtx.endpoint;

  const [language, setLanguage] = useState<Language>("catalan");

  const handleChangeLanguage = (lang: Language) => {
    setLanguage(lang);
    if(endpoint.enabled) endpointCtx.handleEndpointStatus();
  }

  return (
    <View style={styles.rootContainer}>
      <Text variant="headlineMedium" style={styles.subtitle}>
        {t("user.languages.title")}
      </Text>
      <View style={styles.languageContainer}>
        <LanguageItem
          currentLanguage={language}
          itemLanguage="catalan"
          changeLanguage={handleChangeLanguage}
        />
        <LanguageItem
          currentLanguage={language}
          itemLanguage="español"
          changeLanguage={handleChangeLanguage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
  languageContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  subtitle: {
    textAlign: "center",
    textDecorationLine: "underline",
    marginBottom: 25,
    color: "black"
  },
});

export default LanguageIcons;
