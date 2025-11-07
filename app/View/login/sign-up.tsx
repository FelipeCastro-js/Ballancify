import { TColor } from "@/components/constants/colors";
import PrimaryButton from "@/components/ui/primary-button";
import RoundTextField from "@/components/ui/round-text-field";
import SecondaryButton from "@/components/ui/secondary-button";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function SignUpView() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: TColor.gray }}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.column}>
          <Image
            source={require("@/assets/images/app_logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={{ flex: 1 }} />

          <RoundTextField
            title="E-mail address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <View style={{ height: 15 }} />

          <RoundTextField
            title="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <View style={{ height: 20 }} />

          <View style={styles.strengthRow}>
            <View style={styles.strengthBar} />
            <View style={styles.strengthBar} />
            <View style={styles.strengthBar} />
            <View style={styles.strengthBar} />
          </View>

          <View style={{ height: 8 }} />

          <Text style={styles.hint}>
            Use 8 or more characters with a mix of letters,{"\n"}numbers &
            symbols.
          </Text>

          <View style={{ height: 20 }} />

          {/* Primary Button */}
          <PrimaryButton
            title="Get started, it's free!"
            onPress={() => {
              navigation.navigate("social-login" as never);
            }}
          />

          {/* Spacer */}
          <View style={{ flex: 1 }} />

          <Text style={styles.prompt}>Do you have already an account?</Text>

          <View style={{ height: 20 }} />

          <SecondaryButton
            title="Sign in"
            onPress={() => navigation.navigate("sign-in" as never)}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
  },
  logo: {
    width: width * 0.8,
    height: width * 0.8 * 0.6,
    alignSelf: "center",
  },
  strengthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  strengthBar: {
    flex: 1,
    height: 5,
    marginHorizontal: 1,
    backgroundColor: TColor.gray70,
  },
  hint: {
    color: TColor.gray50,
    fontSize: 12,
    textAlign: "left",
  },
  prompt: {
    textAlign: "center",
    color: TColor.white,
    fontSize: 14,
  },
});
