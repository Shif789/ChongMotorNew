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
import loansData from "../data/loans.json";

const LoanScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Sbar backgroundColor="lightgrey" barStyle="light-content" />
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
      <ScrollView style={styles.scrollDesign}>
        <View style={styles.scrollContentStyle}>
          {loansData.map((data, index) => (
            <TouchableOpacity
              key={data.id}
              style={styles.item}
              onPress={() => navigation.navigate("Loan List")}
            >
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.date}>{data.date}</Text>
              <Text style={[styles.status, { color: data.fColor }]}>
                {data.status}
              </Text>
              <Text style={styles.amount}>RM {data.amount}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.newLoanButton}
        onPress={() => navigation.navigate("New Loan Screen")}
      >
        <Text style={styles.newLoanText}>New Loan</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
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
    backgroundColor: "#ffe6e6",
    borderRadius: 15,
  },
  scrollContentStyle: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  item: {
    marginTop: 15,
    backgroundColor: "#f9c2ff",
    width: "90%",
    height: 120,
    borderRadius: 18,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    marginLeft: 20,
  },
  date: {
    fontSize: 16,
    marginLeft: 20,
    fontStyle: "italic",
  },
  amount: {
    fontSize: 20,
    position: "absolute",
    bottom: 5,
    marginLeft: 210,
  },
  status: {
    fontSize: 17,
    position: "absolute",
    bottom: 28,
    marginLeft: 210,
  },
  newLoanButton: {
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
  newLoanText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});

export default LoanScreen;
