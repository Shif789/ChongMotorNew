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
  Image,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const PaymentScreen = ({ navigation }) => {
  //console.log(salesData[0].title);
  const [isVisible1, setIsVisible1] = useState(false);
  const handleVisibility1 = () => {
    setIsVisible1((prevState) => !prevState);
    setIsVisible2((prevState) => (prevState = false));
    setIsVisible3((prevState) => (prevState = false));
  };
  const [isVisible2, setIsVisible2] = useState(false);
  const handleVisibility2 = () => {
    setIsVisible2((prevState) => !prevState);
    setIsVisible1((prevState) => (prevState = false));
    setIsVisible3((prevState) => (prevState = false));
  };
  const [isVisible3, setIsVisible3] = useState(false);
  const handleVisibility3 = () => {
    setIsVisible3((prevState) => !prevState);
    setIsVisible2((prevState) => (prevState = false));
    setIsVisible1((prevState) => (prevState = false));
  };
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
          <Text style={styles.paymentTitle}>Payment Amount (RM)</Text>
          <View style={styles.amountStyle}>
            <Text style={styles.amountTextStyle}>RM</Text>
            <Text style={styles.amountDigitStyle}>500</Text>
          </View>
          <Text style={styles.recommendedText}>
            Recommended Payment Methods
          </Text>

          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={handleVisibility1}>
              <View style={styles.itemPayment}>
                <MaterialCommunityIcons
                  name="credit-card-plus-outline"
                  size={35}
                  color="grey"
                  onPress={() => navigation.navigate("DashboardScreen")}
                  style={styles.icon}
                />
                <View style={styles.paymentMethod}>
                  <Text style={styles.paymentMethodTitle}>
                    New Credit/ Debit Card
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {isVisible1 && (
              <View style={[{ width: "100%" }]}>
                <View style={styles.cardType}>
                  <FontAwesome
                    name="cc-mastercard"
                    size={35}
                    color="grey"
                    //onPress={() => navigation.navigate("DashboardScreen")}
                    style={styles.icon}
                  />
                  <FontAwesome
                    name="cc-visa"
                    size={35}
                    color="grey"
                    //onPress={() => navigation.navigate("DashboardScreen")}
                    style={styles.icon}
                  />
                </View>
                <TextInput
                  style={{
                    width: "96%",
                    height: 40,
                    marginLeft: 8,
                    marginTop: 5,
                    borderBottomColor: "grey",
                    borderBottomWidth: 1,
                    fontSize: 14,
                  }}
                  placeholder="Card Number"
                />
                <TextInput
                  style={{
                    width: "96%",
                    height: 40,
                    marginLeft: 8,
                    borderBottomColor: "grey",
                    borderBottomWidth: 1,
                    fontSize: 14,
                  }}
                  placeholder="Name On Card"
                />
                <View style={styles.cardDetails}>
                  <TextInput
                    style={{
                      width: "40%",
                      marginLeft: 8,
                      height: 40,
                      borderBottomColor: "grey",
                      borderBottomWidth: 1,
                      fontSize: 14,
                    }}
                    placeholder="Expiration (MM/YY)"
                  />
                  <TextInput
                    style={{
                      width: "40%",
                      height: 40,
                      marginRight: 8,
                      borderBottomColor: "grey",
                      borderBottomWidth: 1,
                      fontSize: 14,
                    }}
                    placeholder="CVV"
                  />
                </View>
                <Text style={{ marginTop: 15, textAlign: "center" }}>
                  I acknowledge that my card information is safe in my Trif
                  account and One Time Password might not be required for
                  transactions on Trif.
                </Text>
                <TouchableOpacity
                  style={styles.applyButton}
                  //onPress={() => navigation.navigate("DashboardScreen")}
                >
                  <Text style={styles.applyText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={handleVisibility2}>
              <View style={styles.itemPayment}>
                <FontAwesome
                  name="cc-visa"
                  size={35}
                  color="grey"
                  //onPress={() => navigation.navigate("DashboardScreen")}
                  style={styles.icon}
                />
                <View style={styles.paymentMethod}>
                  <Text style={styles.paymentMethodTitle}>Online Banking</Text>
                  <Text style={styles.bankName}>Maybank</Text>
                </View>
              </View>
            </TouchableOpacity>
            {isVisible2 && (
              <TouchableOpacity
                style={styles.applyButton}
                //onPress={() => navigation.navigate("DashboardScreen")}
              >
                <Text style={styles.applyText}>Confirm</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={handleVisibility3}>
              <View style={styles.itemPayment}>
                <FontAwesome
                  name="cc-mastercard"
                  size={35}
                  color="grey"
                  onPress={() => navigation.navigate("DashboardScreen")}
                  style={styles.icon}
                />
                <View style={styles.paymentMethod}>
                  <Text style={styles.paymentMethodTitle}>Online Banking</Text>
                  <Text style={styles.bankName}>CIMB Bank</Text>
                </View>
              </View>
            </TouchableOpacity>
            {isVisible3 && (
              <TouchableOpacity
                style={styles.applyButton}
                //onPress={() => navigation.navigate("DashboardScreen")}
              >
                <Text style={styles.applyText}>Confirm</Text>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.allTopUpText}>View all top up methods {">"}</Text>
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
    width: "100%",
    backgroundColor: "white",
    //borderRadius: 15,
  },
  scrollContentStyle: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  paymentTitle: { fontSize: 18 },
  amountStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 5,
  },
  amountTextStyle: { color: "blue", fontSize: 30, fontWeight: "bold" },
  amountDigitStyle: { color: "blue", fontSize: 50, fontWeight: "bold" },
  recommendedText: {
    marginTop: 20,
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
  /*item: {
    marginTop: 7,
    backgroundColor: "white",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "100%",
    height: 80,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },*/
  itemContainer: {
    marginTop: 7,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    backgroundColor: "white",
    width: "90%",
    height: "auto",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  /*itemContainerFirst: {
    marginTop: 7,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    backgroundColor: "white",
    width: "90%",
    //height: 390,
    height: "auto",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  itemContainerRest: {
    marginTop: 7,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    backgroundColor: "white",
    width: "90%",
    height: "auto",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },*/
  itemPayment: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cardType: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cardDetails: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paymentMethod: {
    position: "relative",
    marginLeft: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  paymentMethodTitle: {
    fontSize: 18,
  },
  bankName: {
    fontSize: 13,
    color: "grey",
  },
  icon: { marginLeft: 10 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "85%",
    textAlign: "center",
    borderRadius: 12,
    backgroundColor: "white",
  },
  allTopUpText: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 14,
    fontWeight: "bold",
  },
  applyButton: {
    position: "relative",
    //top: 900,
    marginLeft: "auto",
    marginRight: "auto",
    width: "70%",
    height: 45,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    //marginBottom: 10,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  applyText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  hide: { display: "none" },
});

export default PaymentScreen;
