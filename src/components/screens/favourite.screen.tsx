import { useContext, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import FavouriteContent from "../organisms/favourite-content.organism";
import { AuthContext } from "../../contexts/auth.context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import ScreenTitle from "../atoms/screen-title.atom";

const FavouriteScreen = () => {
  const { t } = useTranslation();
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  const [showPage, setShowPage] = useState<boolean>(false);

  useFocusEffect(() => {
    if (!!!authContext.token) {
      Alert.alert(
        t("signInError.title"),
        t("signInError.description").toString(),
        [
          {
            text: t("signInError.accept").toString(),
            onPress: () => {
              navigation.navigate("user");
            },
          },
          {
            text: t("signInError.cancel").toString(),
            onPress: () => {
              navigation.navigate("map");
            },
          },
        ]
      );
      setShowPage(false);
      return;
    }
    setShowPage(true);
  });

  return (
    <View style={styles.rootContainer}>
      <ScreenTitle title={t("favourite.title")} icon={"star"} />
      {showPage ? (
        <>
          <FavouriteContent />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginVertical: "3%",
  },
});

export default FavouriteScreen;
