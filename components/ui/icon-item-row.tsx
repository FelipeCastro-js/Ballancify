import { TColor } from "@/components/constants/colors";
import React from "react";
import { Image, StyleSheet, Switch, Text, View } from "react-native";

interface IconItemRowProps {
  title: string;
  icon: any;
  value: string;
}

export function IconItemRow({ title, icon, value }: IconItemRowProps) {
  return (
    <View style={styles.row}>
      <Image
        source={icon}
        style={[styles.icon, { tintColor: TColor.gray20 }]}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Image
        source={require("@/assets/images/next.png")}
        style={[styles.nextIcon, { tintColor: TColor.gray30 }]}
      />
    </View>
  );
}

interface IconItemSwitchRowProps {
  title: string;
  icon: any;
  value: boolean;
  didChange: (val: boolean) => void;
}

export function IconItemSwitchRow({
  title,
  icon,
  value,
  didChange,
}: IconItemSwitchRowProps) {
  return (
    <View style={styles.row}>
      <Image
        source={icon}
        style={[styles.icon, { tintColor: TColor.gray20 }]}
      />
      <Text style={[styles.title, { flex: 1 }]}>{title}</Text>
      <Switch
        value={value}
        onValueChange={didChange}
        trackColor={{ false: TColor.gray40, true: TColor.secondary }}
        thumbColor={value ? TColor.white : TColor.gray30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  icon: { width: 20, height: 20, resizeMode: "contain", marginRight: 15 },
  title: { color: TColor.white, fontSize: 14, fontWeight: "600" },
  value: {
    flex: 1,
    color: TColor.gray30,
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
    marginRight: 8,
  },
  nextIcon: { width: 12, height: 12, resizeMode: "contain" },
});
