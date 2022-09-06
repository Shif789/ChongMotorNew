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
import notificationData from "../data/notificationData.json";

const NotificationScreen = ({ navigation }) => {
  //console.log(salesData[0].title);
  return (
    <SafeAreaView style={styles.container}>
      <Sbar backgroundColor="lightgrey" barStyle="light-content" />
      {/*<View style={styles.barDesign}>
        <Button
          title="Back"
          onPress={() => navigation.navigate("DashboardScreen")}
        />
        <Text style={styles.barText}>Payment Methods</Text>
  </View>*/}
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
          {notificationData.map((data, index) => {
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

export default NotificationScreen;
