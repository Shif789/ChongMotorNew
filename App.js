import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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
import OnlinePayment from "./app/screens/OnlinePayment";
import OnlineApplication from "./app/screens/OnlineApplication";
import SalesDetailsScreen from "./app/screens/SalesDetailsScreen";

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
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SalesScreen"
          component={SalesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoanScreen"
          component={LoanScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnlineApplication"
          component={OnlineApplication}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnlinePayment"
          component={OnlinePayment}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Casino" component={CasinoComponent} />
        <Stack.Screen name="Cash" component={CashComponent} />
        <Stack.Screen name="Promotion" component={CasinoPromotionsComponent} />
        <Stack.Screen name="Sales Order" component={SalesDetailsScreen} />
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
