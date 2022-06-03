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
import paymentData from "../data/paymentMethod.json";

const OnlinePayment = ({ navigation }) => {
  //console.log(salesData[0].title);
  return (
    <SafeAreaView style={styles.container}>
      <Sbar backgroundColor="lightgrey" barStyle="light-content" />
      <View style={styles.barDesign}>
        <Button
          title="Back"
          onPress={() => navigation.navigate("DashboardScreen")}
        />
        <Text style={styles.barText}>Payment Methods</Text>
      </View>
      <ScrollView style={styles.scrollDesign}>
        <View style={styles.scrollContentStyle}>
          {paymentData.map((data, index) => {
            let paymentResult;
            switch (data.title) {
              case "Insurance":
                paymentResult = (
                  <TouchableOpacity key={data.id} style={styles.item}>
                    <View style={styles.itemHeaderStyle}>
                      <Image
                        style={styles.itemLogoStyle}
                        source={require("../../assets/insurance.png")}
                      />
                      <Text style={styles.title}>{data.title}</Text>
                    </View>
                    <Text style={styles.date}>{data.date}</Text>
                    <Text style={styles.amount}>
                      <Image
                        style={styles.amountLogoStyle}
                        source={require("../../assets/info.png")}
                      />{" "}
                      {data.amount} minutes ago
                    </Text>
                  </TouchableOpacity>
                );
                break;

              case "Service":
                paymentResult = (
                  <TouchableOpacity key={data.id} style={styles.item}>
                    <View style={styles.itemHeaderStyle}>
                      <Image
                        style={styles.itemLogoStyle}
                        source={require("../../assets/service.png")}
                      />
                      <Text style={styles.title}>{data.title}</Text>
                    </View>
                    <Text style={styles.date}>{data.date}</Text>
                    <Text style={styles.amount}>
                      <Image
                        style={styles.amountLogoStyle}
                        source={require("../../assets/info.png")}
                      />{" "}
                      {data.amount} minutes ago
                    </Text>
                  </TouchableOpacity>
                );
                break;

              case "Installment":
                paymentResult = (
                  <TouchableOpacity key={data.id} style={styles.item}>
                    <View style={styles.itemHeaderStyle}>
                      <Image
                        style={styles.itemLogoStyle}
                        source={require("../../assets/installment.png")}
                      />
                      <Text style={styles.title}>{data.title}</Text>
                    </View>
                    <Text style={styles.date}>{data.date}</Text>
                    <Text style={styles.amount}>
                      <Image
                        style={styles.amountLogoStyle}
                        source={require("../../assets/info.png")}
                      />{" "}
                      {data.amount} minutes ago
                    </Text>
                  </TouchableOpacity>
                );
                break;

              default:
                break;
            }
            return paymentResult;
            /*<TouchableOpacity key={data.id} style={styles.item}>
              <View style={styles.itemHeaderStyle}>
                <Image
                  style={styles.itemLogoStyle}
                  source={require("../../assets/insurance.png")}
                />
                <Text style={styles.title}>{data.title}</Text>
              </View>
              <Text style={styles.date}>{data.date}</Text>
              <Text style={styles.amount}>
                <Image
                  style={styles.amountLogoStyle}
                  source={require("../../assets/info.png")}
                />{" "}
                {data.amount} minutes ago
              </Text>
            </TouchableOpacity>*/
          })}
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
    height: 120,
    borderRadius: 18,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  itemHeaderStyle: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  itemLogoStyle: {
    width: 35,
    height: 35,
  },
  title: {
    fontSize: 22,
    marginLeft: 10,
  },
  date: {
    fontSize: 16,
    marginLeft: 65,
    fontStyle: "italic",
  },
  amount: {
    fontSize: 14,
    position: "absolute",
    bottom: 5,
    marginLeft: 200,
  },
  amountLogoStyle: {
    width: 20,
    height: 20,
  },
});

export default OnlinePayment;
