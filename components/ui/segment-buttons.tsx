import { TColor } from "@/components/constants/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface SegmentButtonProps {
  title: string;
  onPress: () => void;
  isActive: boolean;
}

export default function SegmentButton({
  title,
  onPress,
  isActive,
}: SegmentButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.base, isActive && styles.active]}
    >
      <Text
        style={[
          styles.text,
          isActive ? styles.textActive : styles.textInactive,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,

  active: {
    borderWidth: 1,
    borderColor: TColor.border + "26",
    backgroundColor: TColor.gray60 + "33",
  },
  text: { fontSize: 12, fontWeight: "600" },
  textActive: { color: TColor.white },
  textInactive: { color: TColor.gray30 },
});
