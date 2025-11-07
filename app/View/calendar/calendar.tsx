import { TColor } from "@/components/constants/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CalendarView() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Calendar</Text>
        <Text style={styles.subtitle}>Your events and subscriptions 📅</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: TColor.gray },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: TColor.white,
    marginBottom: 10,
  },
  subtitle: { fontSize: 14, color: TColor.gray50, textAlign: "center" },
});
