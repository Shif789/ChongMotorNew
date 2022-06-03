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
} from "react-native";
import React from "react";
import salesData from "../data/sales.json";

const SalesScreen = ({ navigation }) => {
  //console.log(salesData[0].title);
  return (
    <SafeAreaView style={styles.container}>
      <Sbar backgroundColor="lightgrey" barStyle="light-content" />
      <View style={styles.barDesign}>
        <Button
          title="Back"
          onPress={() => navigation.navigate("DashboardScreen")}
        />
        <Text style={styles.barText}>Sales Order</Text>
      </View>
      <ScrollView style={styles.scrollDesign}>
        <View style={styles.scrollContentStyle}>
          {salesData.map((data, index) => (
            <TouchableOpacity
              key={data.id}
              style={styles.item}
              onPress={() => navigation.navigate("Sales Order")}
            >
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.date}>{data.date}</Text>
              <Text style={styles.amount}>RM {data.amount}</Text>
            </TouchableOpacity>
          ))}
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
  },
  barDesign: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: "white",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  barText: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: 18,
    left: 150,
    alignItems: "center",
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
    height: 90,
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
});

export default SalesScreen;
