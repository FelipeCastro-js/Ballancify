import { TColor } from "@/components/constants/colors";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  fontSize?: number;
  fontWeight?: TextStyle["fontWeight"];
};

export default function SecondaryButton({
  title,
  onPress,
  fontSize = 14,
  fontWeight = "600",
}: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <ImageBackground
        source={require("@/assets/images/secodry_btn.png")}
        style={styles.background}
        imageStyle={styles.image}
      >
        <Text style={[styles.text, { fontSize, fontWeight }]}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    width: "100%",
    borderRadius: 30,
    overflow: "hidden",
  } as ViewStyle,
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  image: {
    borderRadius: 30,
  },
  text: {
    color: TColor.white,
    fontFamily: "InterSemiBold",
  } as TextStyle,
});
