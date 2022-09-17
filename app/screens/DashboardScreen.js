import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar as Sbar,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { signOut } from "firebase/auth";
import { authentication } from "../../firebase";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

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
      <View style={styles.barInfoDesign}>
        <Text style={styles.userName}>John Doe</Text>
        <TouchableOpacity onPress={signOutUser}>
          {/*<Image
            style={styles.barSettingsLogo}
            source={require("../../assets/logout.png")}
/>*/}
          <AntDesign
            style={styles.barSettingsLogo}
            name="logout"
            size={22}
            color="white"
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
            source={require("../../assets/salesOrderNew.png")}
          />
          <Text style={styles.logoText}>Sales Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoContent}
          onPress={() => navigation.navigate("LoanScreen")}
        >
          <Image
            style={styles.logo}
            source={require("../../assets/loanNew.png")}
          />
          <Text style={styles.logoText}>Loan{"   "}Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoContent}
          onPress={() => navigation.navigate("OnlineApplication")}
        >
          <Image
            style={styles.logo}
            source={require("../../assets/onlineAppNew.png")}
          />
          <Text style={styles.logoText}>Online{"      "}Application</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoContent}
          onPress={() => navigation.navigate("Payment Screen")}
        >
          <Image
            style={styles.logo}
            source={require("../../assets/paymentNew.png")}
          />
          <Text style={styles.logoText}>Onlne Payment</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Casino")}>
            <Image
              style={[styles.imageDesign, { marginBottom: 0 }]}
              source={require("../../assets/promotion1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cash")}>
            <Image
              style={styles.imageDesign}
              source={require("../../assets/promotion.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Casino")}>
            <Image
              style={styles.imageDesign}
              source={require("../../assets/promotion1.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/*<View style={styles.imageContainer}>
        <ScrollView style={styles.scrollDesign}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Casino")}>
              <Image
                style={[styles.imageDesign, { marginBottom: 0 }]}
                source={require("../../assets/promotion1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginBottom: 10 }}
              onPress={() => navigation.navigate("Cash")}
            >
              <Image
                style={styles.imageDesign}
                source={require("../../assets/promotion.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Casino")}>
              <Image
                style={styles.imageDesign}
                source={require("../../assets/promotion1.png")}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  newContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageDesign: {
    width: 380,
    height: 190,
    resizeMode: "contain",
  },
  /*imageContainer: {
    position: "absolute",
    top: 200,
    alignItems: "center",
    borderWidth: 2,
  },*/
  scrollView: {
    backgroundColor: "white",
    width: "100%",
    marginTop: 230,
  },
  imageContainer: {
    width: "100%",
    height: "auto",
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
    color: "silver",
    width: 72,
    height: 50,
    textAlign: "center",
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
    //width: 25,
    //height: 25,
    marginRight: 13,
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
