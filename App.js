import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
import SignIn from "./screens/Onboarding/SignIn/SignIn";
import ForgetPassword from "./screens/Onboarding/ForgetPassword/ForgetPassword";
import SignUp from "./screens/Onboarding/SignUp/SignUp";
import CheckEmail from "./screens/Onboarding/CheckEmail/CheckEmail";
import PasswordResetSuccess from "./screens/Onboarding/PasswordResetSucess/PasswordResetSucess";
import { BlurView } from "expo-blur";

import { COLORS, SHADOWS, SIZES } from "./constants";
import Icon from "react-native-vector-icons/Ionicons";
import TabBar from "./navigatiors/TabBar/TabBar";
import tabStyles from "./navigatiors/TabBar/tabBar.style";

// SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: SIZES.large,
          marginHorizontal: 5,
          paddingHorizontal: SIZES.large,
          paddingTop: 30,
          gap: 0,
          borderColor: "none",
          backgroundColor: "#ffffff80",
          ...SHADOWS.medium,
          shadowColor: COLORS.white,
          borderRadius: SIZES.xxLarge * 2,
        },
      }}
      // tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, route }) => (
            <TouchableOpacity
              style={[tabStyles.tab, focused && tabStyles.activeTab]}
            >
              <Icon
                name="home-outline"
                size={20}
                color={focused ? COLORS.veryLightPrimary : COLORS.black}
              />
              {focused && <Text style={tabStyles.text}>Home</Text>}
            </TouchableOpacity>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={[tabStyles.tab, focused && tabStyles.longActiveTab]}
            >
              <Icon
                name="notifications-outline"
                size={20}
                color={focused ? COLORS.veryLightPrimary : COLORS.black}
              />
              {focused && <Text style={tabStyles.text}>Notification</Text>}
            </TouchableOpacity>
          ),
        }}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={[tabStyles.tab, focused && tabStyles.longActiveTab]}
            >
              <Icon
                name="chatbox-ellipses-outline"
                size={20}
                color={focused ? COLORS.veryLightPrimary : COLORS.black}
              />
              {focused && <Text style={tabStyles.text}>Messages</Text>}
            </TouchableOpacity>
          ),
        }}
        name="Messages"
        component={Messages}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={[tabStyles.tab, focused && tabStyles.activeTab]}
            >
              <Icon
                name="person-outline"
                size={20}
                color={focused ? COLORS.veryLightPrimary : COLORS.black}
              />
              {focused && <Text style={tabStyles.text}>Profile</Text>}
            </TouchableOpacity>
          ),
        }}
        name="Profile"
        component={Profile}
      />
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
        name="sign-in"
        component={SignIn}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="sign-up"
        component={SignUp}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="forgot-password"
        component={ForgetPassword}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="check-email"
        component={CheckEmail}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="password-reset-success"
        component={PasswordResetSuccess}
      />

      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="home-screen"
        component={TabStack}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="details"
        component={Details}
      />
      <Stack.Screen
        name="notification-details"
        options={{ headerShown: false }}
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
    <NavigationContainer styles={{ backgroundColor: COLORS.primary }}>
      <StatusBar barStyle="light-content" />
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
});
