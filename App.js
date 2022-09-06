import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar as Sbar,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import CasinoComponent from "./app/components/CasinoComponent";
import CashComponent from "./app/components/CashComponent";
import CasinoPromotionsComponent from "./app/components/CasinoPromotionsComponent";
import DashboardScreen from "./app/screens/DashboardScreen";
import LoginScreen from "./app/screens/LoginScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SalesScreen from "./app/screens/SalesScreen";
import LoanScreen from "./app/screens/LoanScreen";
import OnlineApplication from "./app/screens/OnlineApplication";
import SalesDetailsScreen from "./app/screens/SalesDetailsScreen";
import NotificationScreen from "./app/screens/NotificationScreen";
import CustomHeader from "./app/components/CustomHeader";
import LoanDetailsScreen from "./app/screens/LoanDetailsScreen";
import PaymentInstallmentScreen from "./app/screens/PaymentInstallmentScreen";
import NewLoanScreen from "./app/screens/NewLoanScreen";
import PaymentScreen from "./app/screens/PaymentScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SalesScreen"
          component={SalesScreen}
          options={{ headerTitle: "Sales Order", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="LoanScreen"
          component={LoanScreen}
          options={{ headerTitle: "Loan", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="OnlineApplication"
          component={OnlineApplication}
          options={{
            headerTitle: "Online Application",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          na
          options={{
            //header: () => <CustomHeader navigation={navigation} />,
            headerTitle: "Notification",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Casino"
          component={CasinoComponent}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Cash"
          component={CashComponent}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Promotion"
          component={CasinoPromotionsComponent}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Order List"
          component={SalesDetailsScreen}
          options={{ headerTitle: "Order List", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Loan List"
          component={LoanDetailsScreen}
          options={{ headerTitle: "Loan List", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Pay Installment"
          component={PaymentInstallmentScreen}
          options={{
            headerTitle: "Pay Installment",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="New Loan Screen"
          component={NewLoanScreen}
          options={{
            headerTitle: "New Loan",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Payment Screen"
          component={PaymentScreen}
          options={{
            headerTitle: "Payment",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    /*<WelcomeScreen />*/
    /*<CasinoComponent
      imgType="casinoPromotion"
      promoName="Casino"
      displayName="Chong Motor Casino"
    />*/
    /*<CashComponent
      imgType="casinoPromotion"
      promoName="Casino"
      displayName="Chong Motor Casino"
    />*/
    /*<CasinoPromotionsComponent
      imgType="casinoPromotion"
      promoName="Casino"
      displayName="Chong Motor Casino"
    />*/
    /*<LoginScreen />*/
    /*<DashboardScreen />*/
    /*<SalesScreen />*/
    /*<LoanScreen />*/
    /*<OnlinePayment />*/
    /*<OnlineApplication />*/
  );
}

const styles = StyleSheet.create({});
