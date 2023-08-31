import { FC, useContext } from "react";
import { Keyboard, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "../../assets/utils/MainColors";
import { EndpointContext } from "../../contexts/endpoint.context";
import { useTranslation } from "react-i18next";

interface ISearcher {
  disabled: boolean;
  filter?: string;
  handleChangeFilter?: (value: string) => void;
}

const Searcher: FC<ISearcher> = (props) => {
  const { t } = useTranslation();
  const endpointCtx = useContext(EndpointContext);
  const endpoint = endpointCtx.endpoint;

  const handleChange = (e: any) => {
    const { text } = e.nativeEvent;
    if (props.handleChangeFilter) props.handleChangeFilter(text);
  };

  return (
    <TextInput
      mode="outlined"
      placeholder={t("searcher.placeholder").toString()}
      value={
        !!!props.disabled
          ? props.filter
          : endpoint.enabled
          ? endpoint.UIName
          : ""
      }
      onChange={handleChange}
      outlineStyle={{ borderRadius: 15 }}
      style={styles.searcher}
      right={
        <TextInput.Icon
          icon="magnify"
          color={"grey"}
          onTouchEnd={() => Keyboard.dismiss()}
        />
      }
      outlineColor={Colors.primary500}
      activeOutlineColor={Colors.primary500}
      selectionColor={Colors.secondary300}
      textColor="black"
      disabled={props.disabled}
    />
  );
};

const styles = StyleSheet.create({
  searcher: {
    width: "100%",
    backgroundColor: Colors.primary50
  },
});

export default Searcher;
