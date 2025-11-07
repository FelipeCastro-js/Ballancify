import { TColor } from "@/components/constants/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface StatusButtonProps {
  title: string;
  value: string;
  statusColor: string;
  onPress: () => void;
}

export default function StatusButton({
  title,
  value,
  statusColor,
  onPress,
}: StatusButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={{ flex: 1 }}>
      <View style={styles.stack}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
        <View style={[styles.topLine, { backgroundColor: statusColor }]} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  stack: { alignItems: "center" },
  container: {
    height: 68,
    width: "100%",
    borderWidth: 1,
    borderColor: TColor.border + "26",
    backgroundColor: TColor.gray60 + "33",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  topLine: { position: "absolute", top: 0, width: 60, height: 1 },
  title: { color: TColor.gray40, fontSize: 12, fontWeight: "600" },
  value: { color: TColor.white, fontSize: 14, fontWeight: "600" },
});
