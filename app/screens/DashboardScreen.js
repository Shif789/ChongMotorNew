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
import { signOut } from "firebase/auth";
import { authentication } from "../../firebase";

const DashboardScreen = ({ navigation }) => {
  const signOutUser = () => {
    signOut(authentication)
      .then(() => {
        navigation.navigate("WelcomeScreen");
        alert(`User has logged out`);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <SafeAreaView style={styles.newContainer}>
      <Sbar backgroundColor="lightgrey" style="auto" />

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
      <View style={styles.barInfoDesign}>
        <Text style={styles.userName}>John Doe</Text>
        <TouchableOpacity onPress={signOutUser}>
          <Image
            style={styles.barSettingsLogo}
            source={require("../../assets/share.png")}
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
          onPress={() => navigation.navigate("Payment Screen")}
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
    top: 200,
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
    top: 100,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  barDesign: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: "dodgerblue",
    marginBottom: 15,
    //borderBottomWidth: 1,
    //borderBottomColor: "grey",
    position: "absolute",
    top: 0,
  },
  barInfoDesign: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: "dodgerblue",
    marginBottom: 15,
    //borderBottomWidth: 1,
    //borderBottomColor: "grey",
    position: "absolute",
    top: 40,
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
  barSettingsLogo: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
    color: "white",
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
