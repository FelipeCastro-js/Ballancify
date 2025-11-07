import { TColor } from "@/components/constants/colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ItemRowProps {
  title: string;
  value: string;
}

export default function ItemRow({ title, value }: ItemRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Image
        source={require("@/assets/images/next.png")}
        style={[styles.nextIcon, { tintColor: TColor.gray30 }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: { color: TColor.white, fontSize: 14, fontWeight: "600" },
  value: {
    flex: 1,
    color: TColor.gray30,
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
    marginHorizontal: 8,
  },
  nextIcon: { width: 12, height: 12, resizeMode: "contain" },
});
