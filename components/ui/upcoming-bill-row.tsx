import { TColor } from "@/components/constants/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface UpcomingBillRowProps {
  sObj: {
    name: string;
    price: string | number;
    month: string;
    day: string | number;
  };
  onPress: () => void;
}

export default function UpcomingBillRow({
  sObj,
  onPress,
}: UpcomingBillRowProps) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={styles.container}
      >
        <View style={styles.dateBox}>
          <Text style={styles.month}>{sObj.month}</Text>
          <Text style={styles.day}>{sObj.day}</Text>
        </View>
        <Text style={styles.name}>{sObj.name}</Text>
        <Text style={styles.price}>${sObj.price}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 8 },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 64,
    padding: 10,
    borderWidth: 1,
    borderColor: TColor.border + "26",
    borderRadius: 16,
  },
  dateBox: {
    height: 40,
    width: 40,
    padding: 4,
    backgroundColor: TColor.gray70 + "80", // ~0.5
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  month: { color: TColor.gray30, fontSize: 10, fontWeight: "500" },
  day: { color: TColor.gray30, fontSize: 14, fontWeight: "500" },
  name: { flex: 1, color: TColor.white, fontSize: 14, fontWeight: "600" },
  price: {
    color: TColor.white,
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },
});
