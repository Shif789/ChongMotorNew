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
  Button,
} from "react-native";
import React, { useState } from "react";
//import { auth } from "../../firebase";
import { authentication } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  //UserCredential,
} from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signInUser = () => {
    signInWithEmailAndPassword(authentication, username, password)
      .then((UserCredential) => {
        const user = UserCredential.user;
        console.log("Logged in with: ", user.email);
        navigation.navigate("DashboardScreen");
      })
      .catch((error) => alert(error.message));
  };
  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, username, password)
      .then((UserCredential) => {
        const user = UserCredential.user;
        console.log("Registered with: ", user.email);
        alert(`${user.email} has successfully registered`);
        setUsername("");
        setPassword("");
      })
      .catch((error) => alert(error.message));
  };

  /*const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(username, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered in with: ", user.email);
      })
      .catch((error) => alert(error.message));
  };
  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(username, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with: ", user.email);
      })
      .catch((error) => alert(error.message));
  };*/
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
            <Text style={styles.logoText}>Log In</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              value={username}
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}
            />
            <TextInput
              style={styles.input}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <Text style={styles.formText}>Forgot Password? </Text>
          </View>
          <View style={styles.loginContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              //onPress={() => navigation.navigate("DashboardScreen")}
              onPress={signInUser}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              //onPress={() => navigation.navigate("DashboardScreen")}
              onPress={registerUser}
            >
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.termsConditions}>
            By logging in you agree with Chong Motor{" "}
            <Text style={{ color: "blue" }}>Terms</Text> and{" "}
            <Text style={{ color: "blue" }}>Privacy Policy.</Text>
          </Text>
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
    top: 215,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    height: 200,
    borderRadius: 12,
  },
  formText: {
    textDecorationLine: "underline",
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
  logoText: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
    color: "white",
  },
  loginContainer: {
    position: "absolute",
    top: 445,
    width: "100%",
    alignItems: "center",
  },
  loginButton: {
    width: "70%",
    height: 45,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 20,
  },
  registerButton: {
    width: "70%",
    height: 45,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "dodgerblue",
    borderRadius: 20,
  },

  loginText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  registerText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
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
  termsConditions: {
    position: "absolute",
    top: 660,
    width: "90%",
    fontSize: 17,
    alignItems: "center",
    textAlign: "center",
  },
});

export default LoginScreen;
