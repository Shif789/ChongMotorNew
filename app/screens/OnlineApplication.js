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
import React from "react";
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";

const OnlineApplication = ({ navigation }) => {
  //console.log(salesData[0].title);
  return (
    <SafeAreaView style={styles.container}>
      <Sbar backgroundColor="lightgrey" barStyle="light-content" />
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
          {/*<View style={styles.item}>*/}
          <TextInput style={styles.input} placeholder="NRIC/ Passport" />
          {/*</View>
          <View style={styles.item}>*/}
          <TextInput style={styles.input} placeholder="Name" />
          {/*</View>
          <View style={styles.item}>*/}
          <TextInput style={styles.input} placeholder="Address" />
          {/*</View>
          <View style={styles.item}>*/}
          <TextInput style={styles.input} placeholder="Contact No." />
          {/*</View>
          <View style={styles.item}>*/}
          <TextInput style={styles.input} placeholder="Company Name" />
          {/*</View>
          
          <View style={styles.item}>*/}
          <TextInput style={styles.input} placeholder="Down payment" />
          {/*</View>
          <View style={styles.item}>*/}
          <TextInput style={styles.input} placeholder="Model" />

          {/*salesData.map((data, index) => (
            <TouchableOpacity key={data.id} style={styles.item}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.date}>{data.date}</Text>
              <Text style={styles.amount}>RM {data.amount}</Text>
            </TouchableOpacity>
          ))*/}
          {/*</View>
        <View style={styles.item}>*/}
          <TextInput style={styles.input} placeholder="Referral Code" />
          {/*</View>*/}
          <View style={styles.itemOnlineApplication}>
            <Text style={styles.title}>Document Upload</Text>
            <AntDesign
              name="plussquareo"
              size={50}
              color="grey"
              onPress={() => navigation.navigate("DashboardScreen")}
              style={styles.icon}
            />
          </View>
          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => navigation.navigate("DashboardScreen")}
          >
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
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
  itemOnlineApplication: {
    marginTop: 7,
    backgroundColor: "white",
    width: "85%",
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    marginLeft: 0,
    width: 100,
    height: 60,
    color: "grey",
  },
  icon: { position: "relative", marginLeft: 20, marginTop: 5, height: 70 },
  input: {
    height: 40,
    margin: 12,
    fontSize: 18,
    //borderWidth: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: "grey",
    //padding: 10,
    width: "85%",
    textAlign: "left",
    //borderRadius: 12,
    backgroundColor: "white",
  },
  applyButton: {
    position: "relative",
    //top: 900,
    width: "70%",
    height: 45,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    //marginBottom: 10,
    borderRadius: 20,
    marginTop: 45,
    marginBottom: 30,
  },
  applyText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});

export default OnlineApplication;
