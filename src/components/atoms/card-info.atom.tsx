import { FC } from "react";
import { Portal, Modal, Card, Avatar, Text, Button } from "react-native-paper";
import Colors from "../../assets/utils/MainColors";
import { useTranslation } from "react-i18next";
import IMapZone from "../../interfaces/map.interface";

interface ICardInfo {
  zone: IMapZone;
  open: boolean;
  handleClose: () => void;
}

const CardInfo: FC<ICardInfo> = (props) => {
  const { t } = useTranslation();

  const LeftContent = (props: any) => (
    <Avatar.Icon
      {...props}
      style={{ backgroundColor: Colors.primary400 }}
      icon="bed"
    />
  );

  return (
    <Portal>
      <Modal
        dismissable
        visible={props.open}
        onDismiss={props.handleClose}
        contentContainerStyle={{ margin: "5%" }}
      >
        <Card>
          <Card.Title
            title={props.zone.UIName}
            titleVariant="titleLarge"
            left={LeftContent}
          />
          <Card.Cover
            source={{
              uri: props.zone.image,
            }}
            style={{ marginHorizontal: "3%", marginBottom: "5%" }}
          />
          <Card.Content>
            <Text variant="bodyMedium">{props.zone.description}</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="contained"
              buttonColor={Colors.primary400}
              onPressIn={props.handleClose}
            >
              {t("information.cardButton")}
            </Button>
          </Card.Actions>
        </Card>
      </Modal>
    </Portal>
  );
};

export default CardInfo;
