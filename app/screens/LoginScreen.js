import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar as Sbar,
  Platform,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Sbar backgroundColor="lightgrey" style="auto" />

      <ImageBackground
        source={require("../../assets/BackgroundImg.png")}
        style={styles.background}
      >
        <View style={styles.newContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/Logo.png")}
            />
          </View>
          <View style={styles.formContainer}>
            <TextInput style={styles.input} placeholder="Username" />
            <TextInput style={styles.input} placeholder="Password" />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("DashboardScreen")}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  newContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? Sbar.currentHeight : 0,
  },

  formContainer: {
    position: "absolute",
    top: 280,
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    height: 250,
    justifyContent: "center",
    borderRadius: 12,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "cover",
  },
  logoContainer: {
    position: "absolute",
    top: 40,
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    textAlign: "center",
    borderRadius: 12,
  },
});

export default LoginScreen;
