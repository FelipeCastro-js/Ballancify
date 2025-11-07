import { TColor } from "@/components/constants/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import AddSubscriptionView from "./add-subscription";
import CalendarView from "./calendar";
import CardsView from "./card";
import HomeView from "./home";
import SpendingBudgetsView from "./spending-budgets";

const Tab = createBottomTabNavigator();

export default function MainTabView() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: TColor.gray,
          paddingVertical: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/home.png")}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Budgets"
        component={SpendingBudgetsView}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/budgets.png")}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddSubscriptionView}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity {...(props as any)} style={styles.centerButton}>
              <Image
                source={require("@/assets/images/center_btn.png")}
                style={{ width: 55, height: 55 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarView}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/calendar.png")}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CardsView}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/creditcards.png")}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
  centerButton: {
    top: -20,
    justifyContent: "center",
    alignItems: "center",
  },
});
