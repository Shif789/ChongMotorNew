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
import { FontAwesome } from "@expo/vector-icons";
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
        <Text style={styles.barTitle}>e-ONE Credit Sdn Bhd</Text>
        <TouchableOpacity
          style={styles.barNotification}
          onPress={() => navigation.navigate("Notification")}
        >
          {/*<Image
            style={styles.barNotificationLogo}
            source={require("../../assets/bell.png")}
  />*/}
          <FontAwesome name="bell-o" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollDesign}>
        <View style={styles.scrollContentStyle}>
          <Text style={styles.day}>Today</Text>
          {notificationData
            .filter((data) => data.timeFormat !== 48)
            .map((data, index) => (
              <TouchableOpacity key={data.id} style={styles.item}>
                <View style={styles.itemHeaderStyle}>
                  <Image
                    style={styles.itemLogoStyle}
                    source={require("../../assets/notification.png")}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      //flexDirection: "row",
                      //alignItems: "center",
                      width: 320,
                      //borderWidth: 1,
                    }}
                  >
                    <Text style={styles.title}>{data.title} </Text>
                    <Text style={styles.date}>{data.info}</Text>
                  </Text>
                </View>
                <Text style={styles.amount}>
                  <Image
                    style={styles.amountLogoStyle}
                    source={require("../../assets/time.png")}
                  />{" "}
                  {data.timeValue} {data.timeText} ago
                </Text>
              </TouchableOpacity>
              /*let paymentResult;
            
            switch (data.title) {
              case "Insurance":
                paymentResult = (
                  <TouchableOpacity key={data.id} style={styles.item}>
                    <View style={styles.itemHeaderStyle}>
                      <Image
                        style={styles.itemLogoStyle}
                        source={require("../../assets/notification.png")}
                      />
                      <Text
                        style={{
                          marginLeft: 10,
                          //flexDirection: "row",
                          //alignItems: "center",
                          width: 320,
                          //borderWidth: 1,
                        }}
                      >
                        <Text style={styles.title}>{data.title} </Text>
                        <Text style={styles.date}>{data.date}</Text>
                      </Text>
                    </View>
                    <Text style={styles.amount}>
                      <Image
                        style={styles.amountLogoStyle}
                        source={require("../../assets/time.png")}
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
                        source={require("../../assets/notification.png")}
                      />
                      <Text style={styles.title}>{data.title}</Text>
                    </View>
                    <Text style={styles.date}>{data.date}</Text>
                    <Text style={styles.amount}>
                      <Image
                        style={styles.amountLogoStyle}
                        source={require("../../assets/info.png")}
                      />{" "}
                      {data.amount} hours ago
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
                        source={require("../../assets/notification.png")}
                      />
                      <Text style={styles.title}>{data.title}</Text>
                    </View>
                    <Text style={styles.date}>{data.date}</Text>
                    <Text style={styles.amount}>
                      <Image
                        style={styles.amountLogoStyle}
                        source={require("../../assets/info.png")}
                      />{" "}
                      Yesterday at {data.amount}pm
                    </Text>
                  </TouchableOpacity>
                );
                break;

              default:
                break;
            }*/
              //return paymentResult;
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
            ))}
          <Text style={styles.day}>Yesterday</Text>
          {notificationData
            .filter((data) => data.timeFormat !== 24)
            .map((data, index) => (
              <TouchableOpacity key={data.id} style={styles.item}>
                <View style={styles.itemHeaderStyle}>
                  <Image
                    style={styles.itemLogoStyle}
                    source={require("../../assets/notification.png")}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      //flexDirection: "row",
                      //alignItems: "center",
                      width: 320,
                      //borderWidth: 1,
                    }}
                  >
                    <Text style={styles.title}>{data.title} </Text>
                    <Text style={styles.date}>{data.info}</Text>
                  </Text>
                </View>
                <Text style={styles.amount}>
                  <Image
                    style={styles.amountLogoStyle}
                    source={require("../../assets/time.png")}
                  />{" "}
                  Yesterday at {data.timeValue} {data.timeText}
                </Text>
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
    width: "95%",
    backgroundColor: "white",
    //borderRadius: 15,
  },
  scrollContentStyle: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  day: {
    fontSize: 20,
    fontWeight: "bold",
    color: "dodgerblue",
    marginTop: 18,
    marginBottom: 12,
    marginRight: 260,
    width: 95,
  },
  item: {
    marginTop: 0,
    marginBottom: 15,
    backgroundColor: "white",
    borderBottomColor: "grey",
    borderBottomWidth: 1.5,
    width: "100%",
    height: "auto",
    //borderRadius: 18,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  itemHeaderStyle: {
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  itemLogoStyle: {
    width: 35,
    height: 35,
    resizeMode: "cover",
  },
  title: {
    fontSize: 22,
    marginLeft: 10,
    fontWeight: "bold",
  },
  date: {
    fontSize: 17,
    marginLeft: 15,
    //fontStyle: "italic",
    //width: 20,
  },
  amount: {
    fontSize: 15,
    color: "grey",
    //position: "absolute",
    //bottom: 5,
    marginTop: 10,
    marginLeft: 48,
    marginBottom: 15,
  },
  amountLogoStyle: {
    width: 20,
    height: 20,
  },
});

export default NotificationScreen;
