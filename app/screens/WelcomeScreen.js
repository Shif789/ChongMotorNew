import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar as Sbar,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Sbar backgroundColor="lightgrey" style="auto" />
      <View
        //source={require("../../assets/BackgroundImg.png")}
        style={styles.background}
      >
        <View style={styles.newContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/e-ONElogo.jpg")}
            />
            {/*<Text style={[styles.textDesign, { width: "100%" }]}>
              Become a MILLIONAIR
  </Text>*/}
          </View>

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
            {/*<TouchableOpacity onPress={() => navigation.navigate("Promotion")}>
              <Image
                style={styles.imageDesign}
                source={require("../../assets/casinoPromotion.jpg")}
              />
</TouchableOpacity>*/}
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          {/* <Button title="Login" style={styles.loginButton} /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  newContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? Sbar.currentHeight : 0,
  },
  imageDesign: {
    width: 380,
    height: 200,
    resizeMode: "contain",

    //borderRadius: 20,
  },
  imageContainer: {
    position: "absolute",
    top: 200,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    width: 270,
    height: 100,
    resizeMode: "cover",
  },
  logoContainer: {
    position: "absolute",
    top: 40,
    alignItems: "center",
  },
  loginButton: {
    position: "absolute",
    top: 670,
    width: "80%",
    height: 45,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },

  textDesign: {
    backgroundColor: /*"#FFD700"*/ "transparent",
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
  },
  loginText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});

export default WelcomeScreen;
