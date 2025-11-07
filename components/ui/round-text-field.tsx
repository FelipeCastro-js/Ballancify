// components/ui/round-text-field.tsx
import { TColor } from "@/components/constants/colors";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  title: string;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: TextInputProps["keyboardType"];
  titleAlign?: "left" | "center" | "right";
  secureTextEntry?: boolean;
};

export default function RoundTextField({
  title,
  value,
  onChangeText,
  keyboardType,
  titleAlign = "left",
  secureTextEntry = false,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, { textAlign: titleAlign }]}>{title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={styles.input}
          placeholder=""
          placeholderTextColor={TColor.gray40}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },
  label: {
    color: TColor.gray50,
    fontSize: 12,
    marginBottom: 4,
  } as TextStyle,
  inputContainer: {
    height: 48,
    width: "100%",
    backgroundColor: TColor.gray60 + "0D", // 5% opacity
    borderColor: TColor.gray70,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    paddingHorizontal: 12,
  } as ViewStyle,
  input: {
    fontSize: 14,
    color: TColor.white,
    fontFamily: "InterRegular",
  } as TextStyle,
});
