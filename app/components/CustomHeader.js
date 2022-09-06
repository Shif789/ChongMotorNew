import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="arrow-back"
        size={28}
        onPress={() => navigation.navigate("DashboardScreen")}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>Notification</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 50,
    height: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
});

export default CustomHeader;
