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
import { useCallback, useLayoutEffect } from "react";
import { StatusBar } from "react-native";
import SignIn from "./screens/Onboarding/SignIn/SignIn";
import ForgetPassword from "./screens/Onboarding/ForgetPassword/ForgetPassword";
import SignUp from "./screens/Onboarding/SignUp/SignUp";
import CheckEmail from "./screens/Onboarding/CheckEmail/CheckEmail";
import PasswordResetSuccess from "./screens/Onboarding/PasswordResetSucess/PasswordResetSucess";
import { useRoute } from "@react-navigation/native";

import { COLORS, SHADOWS, SIZES } from "./constants";
import Icon from "react-native-vector-icons/Ionicons";
import TabBar from "./navigatiors/TabBar/TabBar";
import tabStyles from "./navigatiors/TabBar/tabBar.style";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: SIZES.xxSmall,
          marginHorizontal: SIZES.medium,
          paddingHorizontal: SIZES.large,
          paddingTop: 30,
          gap: 0,
          borderColor: "none",
          backgroundColor: COLORS.transparentWhite,
          ...SHADOWS.large,
          borderRadius: SIZES.xxLarge * 2,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false,
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
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, route }) => (
            <TouchableOpacity
              style={[
                tabStyles.tab,
                route === "Messages" && tabStyles.conditionalPositionTwo,
                focused && tabStyles.activeTab,
              ]}
            >
              <Icon
                name="notifications-outline"
                size={20}
                color={focused ? COLORS.veryLightPrimary : COLORS.black}
              />
              {focused && <Text style={tabStyles.text}>Alerts</Text>}
            </TouchableOpacity>
          ),
        }}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, route }) => (
            <TouchableOpacity
              style={[tabStyles.tab, focused && tabStyles.activeTab]}
            >
              <Icon
                name="chatbox-ellipses-outline"
                size={20}
                color={focused ? COLORS.veryLightPrimary : COLORS.black}
              />
              {focused && <Text style={tabStyles.text}>Inbox</Text>}
            </TouchableOpacity>
          ),
        }}
        name="Messages"
        component={Messages}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, route }) => (
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
