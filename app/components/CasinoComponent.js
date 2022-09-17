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
import { FontAwesome } from "@expo/vector-icons";

const CasinoComponent = (props) => {
  const { imgType, promoName, displayName } = props;
  let imgDisplay1 = "../../assets/promotion1Big.png";
  let imgDisplay2 = "../../assets/promotion.png";
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
        <Text style={styles.barText}>{/*promoName}Casino</Text>
      </View> */}
      <View style={styles.barDesign}>
        <Text style={styles.barTitle}>e-ONE Credit Sdn Bhd</Text>
        <TouchableOpacity
          style={styles.barNotification}
          onPress={() => navigation.navigate("Notification")}
        >
          {/*<Image
            style={styles.barNotificationLogo}
            source={require("../../assets/bell.png")}
  />*/}
          <FontAwesome name="bell-o" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.imageStyle}
        source=/*{displayImage}*/ {require(imgDisplay1)}
      />
      <Text style={styles.adds}>10% OFF ADDS</Text>
      <View style={styles.infoStyle}>
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>
          {/*displayName*/}e-ONE Credit Casino
        </Text>
        <View style={styles.bullets}>
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
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  barDesign: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "dodgerblue",
    marginBottom: 0,
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
    height: 176,
    resizeMode: "contain",
  },
  infoStyle: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "90%",
  },
  bullets: {
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  adds: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "dodgerblue",
  },
});

export default CasinoComponent;
