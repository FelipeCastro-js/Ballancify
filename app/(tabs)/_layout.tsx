import { TColor } from "@/components/constants/colors";
import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: TColor.gray30,
        tabBarLabelStyle: { fontSize: 10, fontWeight: "600", marginBottom: 4 },
        tabBarStyle: [
          styles.tabBarBase,
          {
            backgroundColor: TColor.gray,
            borderTopWidth: 0,
            elevation: 10,
            shadowColor: "#000",
            shadowOpacity: 0.18,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 6 },
          },
        ],
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/home.png")}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="spending-budgets"
        options={{
          title: "Budgets",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/budgets.png")}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="add-subscription"
        options={{
          title: "",
          tabBarButton: (props) => (
            <TouchableOpacity
              {...(props as any)}
              activeOpacity={0.85}
              style={styles.centerButton}
            >
              <View style={styles.fabWrap}>
                <View style={styles.fabRing} />
                <Image
                  source={require("@/assets/images/center_btn.png")}
                  style={styles.fabIcon}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/calendar.png")}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="card"
        options={{
          title: "Cards",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/creditcards.png")}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const SIZE = 58;

const styles = StyleSheet.create({
  icon: { width: 22, height: 22, resizeMode: "contain" },

  tabBarBase: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16,
    height: 68,
    borderRadius: 18,
    paddingBottom: 6,
    paddingTop: 6,
  },

  centerButton: {
    top: -22,
    justifyContent: "center",
    alignItems: "center",
  },

  fabWrap: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: TColor.gray,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.22,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
  },

  fabRing: {
    position: "absolute",
    inset: -4,
    borderRadius: (SIZE + 8) / 2,
    borderWidth: 4,
    borderColor: TColor.gray,
  },

  fabIcon: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    resizeMode: "contain",
  },
});
