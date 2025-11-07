import { TColor } from "@/components/constants/colors";
import PrimaryButton from "@/components/ui/primary-button";
import RoundTextField from "@/components/ui/round-text-field";
import SecondaryButton from "@/components/ui/secondary-button";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function SignInView() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: TColor.gray }}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.column}>
          {/* Logo */}
          <Image
            source={require("@/assets/images/app_logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Spacer */}
          <View style={{ flex: 1 }} />

          {/* Email Field */}
          <RoundTextField
            title="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <View style={{ height: 15 }} />

          {/* Password Field */}
          <RoundTextField
            title="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <View style={{ height: 8 }} />

          {/* Remember me + Forgot password */}
          <View style={styles.rowBetween}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => setIsRemember(!isRemember)}
            >
              <Text style={styles.checkbox}>{isRemember ? "☑" : "☐"}</Text>
              <Text style={styles.rememberText}>Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.forgotText}>Forgot password</Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: 8 }} />

          {/* Sign In Button */}
          <PrimaryButton
            title="Sign In"
            onPress={() => {
              // navigation.navigate("social-login" as never);
            }}
          />

          <View style={{ flex: 1 }} />

          <Text style={styles.prompt}>if you don't have an account yet?</Text>

          <View style={{ height: 20 }} />

          <SecondaryButton
            title="Sign up"
            onPress={() => navigation.navigate("sign-up" as never)}
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
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  checkbox: {
    fontSize: 20,
    color: TColor.gray50,
    marginRight: 8,
  },
  rememberText: {
    color: TColor.gray50,
    fontSize: 14,
  },
  forgotText: {
    color: TColor.gray50,
    fontSize: 14,
  },
  prompt: {
    textAlign: "center",
    color: TColor.white,
    fontSize: 14,
  },
});
