import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar as Sbar,
  Platform,
  SafeAreaView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.newContainer}>
      <Sbar backgroundColor="lightgrey" style="auto" />

      <View style={styles.barDesign}>
        <Text style={styles.barText}>Chong Motor</Text>
        <TouchableOpacity onPress={() => navigation.navigate("WelcomeScreen")}>
          <Image
            style={styles.barLogo}
            source={require("../../assets/logout.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.logoContainer}>
        <TouchableOpacity
          style={styles.logoContent}
          onPress={() => navigation.navigate("SalesScreen")}
        >
          <Image
            style={styles.logo}
            source={require("../../assets/salesOrder.png")}
          />
          <Text style={styles.logoText}>Sales Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoContent}
          onPress={() => navigation.navigate("LoanScreen")}
        >
          <Image
            style={styles.logo}
            source={require("../../assets/loan.png")}
          />
          <Text style={styles.logoText}>Loan Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoContent}
          onPress={() => navigation.navigate("OnlineApplication")}
        >
          <Image
            style={styles.logo}
            source={require("../../assets/onlineApp.png")}
          />
          <Text style={styles.logoText}>Online App</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoContent}
          onPress={() => navigation.navigate("OnlinePayment")}
        >
          <Image
            style={styles.logo}
            source={require("../../assets/digitalPayment.png")}
          />
          <Text style={styles.logoText}>Onlne Payment</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Casino")}>
          <Image
            style={[styles.imageDesign, { marginBottom: 7 }]}
            source={require("../../assets/casino.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cash")}>
          <Image
            style={[styles.imageDesign, { marginBottom: 7 }]}
            source={require("../../assets/cash.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Promotion")}>
          <Image
            style={styles.imageDesign}
            source={require("../../assets/casinoPromotion.jpg")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  newContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageDesign: {
    width: 300,
    height: 150,
    borderRadius: 20,
  },
  imageContainer: {
    position: "absolute",
    top: 180,
    alignItems: "center",
  },

  logo: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  logoText: {
    fontWeight: "bold",
    marginTop: 2,
  },
  logoContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  barDesign: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 35,
    backgroundColor: "white",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    position: "absolute",
    top: 0,
  },
  barLogo: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  barText: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  loginButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DashboardScreen;
