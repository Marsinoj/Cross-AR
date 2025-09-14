import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import your screens
import MainScreen from "./screens/MainScreen";
import LoginScreen from "../CrossAR/screens/Login";
import SignupScreen from "../CrossAR/screens/SignUp";
import PermissionScreen from "./screens/PermissionScreen";

export type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  Signup: undefined;
  Permission: undefined;
  Guest: undefined; // optional if you make a separate guest screen
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Permission" component={PermissionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
