import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar as Sbar,
  ScrollView,
  Button,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Data from "../data/payInstallmentData.json";

const PaymentInstallmentScreen = ({ navigation }) => {
  //console.log(salesData[0].title);
  return (
    <SafeAreaView style={styles.container}>
      <Sbar backgroundColor="lightgrey" barStyle="light-content" />
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
      <ScrollView style={styles.scrollDesign}>
        <View style={styles.scrollContentStyle}>
          {Data.map((data, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.title}>{data.field}</Text>
              <TextInput style={styles.input} value={data.value} />
            </View>
          ))}
          <TouchableOpacity
            style={styles.payNowButton}
            onPress={() => navigation.navigate("Payment Screen")}
          >
            <Text style={styles.payNowText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  scrollDesign: {
    //justifyContent: "flex-start",
    //alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    //borderRadius: 15,
  },
  scrollContentStyle: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  item: {
    marginTop: 8,
    backgroundColor: "white",
    //borderBottomColor: "black",
    //borderBottomWidth: 2,
    width: "100%",
    height: 85,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    color: "grey",
  },
  input: {
    height: 40,
    marginHorizontal: 12,
    fontSize: 18,

    //borderWidth: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: "grey",
    //padding: 10,
    width: "93%",
    textAlign: "left",
    //borderRadius: 12,
    backgroundColor: "white",
  },
  payNowButton: {
    position: "relative",
    //top: 900,
    width: "70%",
    height: 45,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    //marginBottom: 10,
    borderRadius: 20,
    marginTop: 50,
    marginBottom: 30,
  },
  payNowText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});

export default PaymentInstallmentScreen;
