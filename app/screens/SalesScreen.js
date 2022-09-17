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
  Image,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import salesData from "../data/sales.json";

const SalesScreen = ({ navigation }) => {
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
          {salesData.map((data, index) => (
            <TouchableOpacity
              key={data.id}
              style={styles.item}
              onPress={() => navigation.navigate("Order List")}
            >
              <Text style={styles.title}>
                {data.salesNo} - {data.productNo}
              </Text>
              <Text style={styles.date}>{data.date}</Text>
              <Text style={styles.amount}>RM {data.amount}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.couponButton}
        onPress={() => navigation.navigate("DashboardScreen")}
      >
        <Text style={styles.couponText}>View My Coupons</Text>
      </TouchableOpacity>
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
    width: "95%",
    backgroundColor: "white",
    //borderRadius: 15,
  },
  scrollContentStyle: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  item: {
    marginTop: 30,
    backgroundColor: "white",
    borderBottomWidth: 1.5,
    borderBottomColor: "grey",
    width: "98%",
    height: 75,
    //borderRadius: 18,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight: "bold",
  },
  date: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 3,
    color: "grey",
  },
  amount: {
    fontSize: 20,
    position: "absolute",
    bottom: 14,
    marginLeft: 260,
    fontWeight: "bold",
  },
  couponButton: {
    position: "absolute",
    top: 600,
    width: "70%",
    height: 45,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    //marginBottom: 10,
    borderRadius: 20,
  },
  couponText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});

export default SalesScreen;
