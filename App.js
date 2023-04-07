import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./navigatiors/Home/Home";
import Notification from "./navigatiors/Notification/Notification";
import Messages from "./navigatiors/Messages/Messages";
import Profile from "./navigatiors/Profile/Profile";
import Details from "./components/Home/Details/Details";
import NotificationDetails from "./components/Notification/NotificationDetails/NotificationDetails";
import Welcome from "./screens/Welcome/Welcome";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { StatusBar } from "react-native";
import SignIn from "./screens/SignIn/SignIn";
import ForgetPassword from "./screens/ForgetPassword/ForgetPassword";

// SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="HomeScreen" component={TabStack} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="Notification-Details"
        component={NotificationDetails}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <StackNavigator />
    </NavigationContainer>
  );
}
