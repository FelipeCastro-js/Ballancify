import { TColor } from "@/components/constants/colors";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SubScriptionHomeRowProps {
  sObj: { icon: any; name: string; price: string | number };
  onPress: () => void;
}

export default function SubScriptionHomeRow({
  sObj,
  onPress,
}: SubScriptionHomeRowProps) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={styles.container}
      >
        <Image source={sObj.icon} style={styles.icon} />
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
    backgroundColor: "transparent",
  },
  icon: { width: 40, height: 40, resizeMode: "contain", marginRight: 8 },
  name: { flex: 1, color: TColor.white, fontSize: 14, fontWeight: "600" },
  price: {
    color: TColor.white,
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },
});
