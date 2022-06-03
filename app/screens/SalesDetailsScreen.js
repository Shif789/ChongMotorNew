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
import Data from "../data/salesDetailsData.json";

const SalesDetailsScreen = ({ navigation }) => {
  //console.log(salesData[0].title);
  return (
    <SafeAreaView style={styles.container}>
      <Sbar backgroundColor="lightgrey" barStyle="light-content" />
      <ScrollView style={styles.scrollDesign}>
        <View style={styles.scrollContentStyle}>
          {Data.map((data, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.title}>{data.field}</Text>
              <TextInput style={styles.input} value={data.value} />
            </View>
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
    backgroundColor: "white",
  },
  scrollDesign: {
    //justifyContent: "flex-start",
    //alignItems: "center",
    width: "100%",
    backgroundColor: "#ffe6e6",
    //borderRadius: 15,
  },
  scrollContentStyle: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  item: {
    marginTop: 15,
    backgroundColor: "#f9c2ff",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "100%",
    height: 100,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
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
});

export default SalesDetailsScreen;
