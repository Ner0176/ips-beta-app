import { View, StyleSheet } from "react-native";
import ScreenTitle from "../atoms/screen-title.atom";
import UserContent from "../organisms/user-content.organism";
import { useTranslation } from "react-i18next";

const UserScreen = () => {
    const { t } = useTranslation();
    return(
        <View style={styles.rootContainer}>
            <ScreenTitle title={t("user.title")} icon={"account"} />
            <UserContent />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginVertical: "3%",
    }
});

export default UserScreen;