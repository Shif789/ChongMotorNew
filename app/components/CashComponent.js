import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  StatusBar as Sbar,
  Platform,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const CashComponent = (props) => {
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
        <Text style={styles.barText}>{/*promoName}Cash</Text>
      </View> */}
      <View style={styles.barDesign}>
        <Text style={styles.barTitle}>Chong Motor</Text>
        <TouchableOpacity
          style={styles.barNotification}
          onPress={() => navigation.navigate("Notification")}
        >
          <Image
            style={styles.barNotificationLogo}
            source={require("../../assets/bell.png")}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.imageStyle}
        source=/*{displayImage}*/ {require(imgDisplay2)}
      />
      <View style={styles.infoStyle}>
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>
          {/*displayName*/}Become a Millionaire
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
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "dodgerblue",
    marginBottom: 15,
    //borderBottomWidth: 1,
    //borderBottomColor: "grey",
    //position: "absolute",
    //top: 0,
  },
  barNotification: {
    //width: 25,
    //height: 25,
    position: "absolute",
    alignItems: "center",
    top: 10,
    left: 355,
    //marginRight: 10,
  },
  barNotificationLogo: {
    width: 25,
    height: 25,
    //position: "absolute",
    //alignItems: "center",
    //top: -10,
    //left: 88,
    //marginRight: 10,
  },
  barTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 10,
    color: "white",
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

export default CashComponent;
