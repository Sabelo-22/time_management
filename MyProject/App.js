import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./src/screens/Tabs";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import SignupScreen from "./src/screens/SignupScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainApp" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
