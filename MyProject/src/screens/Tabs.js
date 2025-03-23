import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardView from "./DashbaordView";
import CalendarView from "./CalendarView";
import SettingsView from "./SettingView";
import ProfileView from "./ProfileView";
import FloatingActionBtn from "../components/Floating Action Button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={DashboardView}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="ssid-chart"
              size={24}
              color={focused ? "rgba(36, 39, 96, 1)" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarView}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="calendar-edit"
              size={24}
              color={focused ? "rgba(36, 39, 96, 1)" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FAB"
        component={DashboardView}
        options={{
          tabBarButton: () => <FloatingActionBtn />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsView}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="settings"
              size={24}
              color={focused ? "rgba(36, 39, 96, 1)" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileView}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="male"
              size={24}
              color={focused ? "rgba(36, 39, 96, 1)" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
