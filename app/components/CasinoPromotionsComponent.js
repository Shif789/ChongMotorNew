import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  StatusBar as Sbar,
  Platform,
  Button,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const CasinoPromotionsComponent = (props) => {
  const { imgType, promoName, displayName } = props;
  let imgDisplay1 = "../../assets/casino.jpg";
  let imgDisplay2 = "../../assets/cash.jpg";
  let imgDisplay3 = "../../assets/casinoPromotion.jpg";
  /*let displayImage;

  switch (imgType) {
    case "casino":
      displayImage = require(imgDisplay1);
      break;
    case "cash":
      displayImage = require(imgDisplay2);
      break;
    case "casinoPromotion":
      displayImage = require(imgDisplay3);
      break;

    default:
      break;
  }*/
  //console.log(imgDisplay3);

  return (
    <SafeAreaView style={styles.container}>
      <Sbar backgroundColor="lightgrey" style="auto" />
      {/* <View style={styles.barDesign}>
        <Button title="Back" />
        <Text style={styles.barText}>{/*promoName}Promotions</Text>
      </View> */}
      <Image
        style={styles.imageStyle}
        source=/*{displayImage}*/ {require(imgDisplay1)}
      />
      <View style={styles.infoStyle}>
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>
          {/*displayName*/}Promotions and Jackpot
        </Text>
        <Text style={{ fontStyle: "italic", fontSize: 18 }}>
          {"\u2B24" + " "}Best Casino ever
        </Text>
        <Text style={{ fontStyle: "italic", fontSize: 18 }}>
          {"\u2B24" + " "}Simple rules
        </Text>
        <Text style={{ fontStyle: "italic", fontSize: 18 }}>
          {"\u2B24" + " "} Quite popular
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  barDesign: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: "white",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  barText: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: 18,
    left: 150,
    alignItems: "center",
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
  infoStyle: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CasinoPromotionsComponent;
