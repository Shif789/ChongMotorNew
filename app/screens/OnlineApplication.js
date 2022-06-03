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
  TextInput,
} from "react-native";
import React from "react";
import salesData from "../data/sales.json";

const OnlineApplication = ({ navigation }) => {
  //console.log(salesData[0].title);
  return (
    <SafeAreaView style={styles.container}>
      <Sbar backgroundColor="lightgrey" barStyle="light-content" />
      <View style={styles.barDesign}>
        <Button
          title="Back"
          onPress={() => navigation.navigate("DashboardScreen")}
        />
        <Text style={styles.barText}>New Application</Text>
      </View>
      <ScrollView style={styles.scrollDesign}>
        <View style={styles.scrollContentStyle}>
          <TextInput style={styles.input} placeholder="NRIC/ Passport" />
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Address" />
          <TextInput style={styles.input} placeholder="Contact No." />
          <TextInput style={styles.input} placeholder="Company Name" />
          <TextInput style={styles.input} placeholder="Loan Amount" />
          <TextInput style={styles.input} placeholder="Down payment" />
          <TextInput style={styles.input} placeholder="Model" />
          <View style={styles.btnStyle}>
            <Button title="Apply for Loan" />
          </View>
          {/*salesData.map((data, index) => (
            <TouchableOpacity key={data.id} style={styles.item}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.date}>{data.date}</Text>
              <Text style={styles.amount}>RM {data.amount}</Text>
            </TouchableOpacity>
          ))*/}
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
    height: 1000,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    textAlign: "center",
    borderRadius: 12,
    backgroundColor: "white",
  },
  btnStyle: {
    position: "absolute",
    width: "100%",
    height: 40,
    //backgroundColor: "dodgerblue",
    top: 630,
  },
});

export default OnlineApplication;
