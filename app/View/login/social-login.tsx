import { TColor } from "@/components/constants/colors";
import SecondaryButton from "@/components/ui/secondary-button";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function SocialLoginView() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: TColor.gray }}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Logo */}
          <Image
            source={require("@/assets/images/app_logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Botones */}
          <View style={styles.buttonsContainer}>
            {/* Apple */}
            <TouchableOpacity activeOpacity={0.8} style={styles.socialBtn}>
              <ImageBackground
                source={require("@/assets/images/apple_btn.png")}
                style={styles.socialBtn}
                imageStyle={{ borderRadius: 30 }}
              >
                <View style={styles.row}>
                  <Image
                    source={require("@/assets/images/apple.png")}
                    style={styles.socialIcon}
                  />
                  <Text style={styles.socialText}>Sign up with Apple</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            {/* Google */}
            <TouchableOpacity activeOpacity={0.8} style={styles.socialBtn}>
              <ImageBackground
                source={require("@/assets/images/google_btn.png")}
                style={styles.socialBtn}
                imageStyle={{ borderRadius: 30 }}
              >
                <View style={styles.row}>
                  <Image
                    source={require("@/assets/images/google.png")}
                    style={[styles.socialIcon, { tintColor: TColor.gray }]}
                  />
                  <Text style={[styles.socialText, { color: TColor.gray }]}>
                    Sign up with Google
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            {/* Facebook */}
            <TouchableOpacity activeOpacity={0.8} style={styles.socialBtn}>
              <ImageBackground
                source={require("@/assets/images/fb_btn.png")}
                style={styles.socialBtn}
                imageStyle={{ borderRadius: 30 }}
              >
                <View style={styles.row}>
                  <Image
                    source={require("@/assets/images/fb.png")}
                    style={styles.socialIcon}
                  />
                  <Text style={styles.socialText}>Sign up with Facebook</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <Text style={styles.orText}>or</Text>

            <SecondaryButton
              title="Sign up with E-mail"
              onPress={() => navigation.navigate("sign-up" as never)}
            />

            <Text style={styles.terms}>
              By registering, you agree to our Terms of Use. Learn how we
              collect, use and share your data.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
  },
  logo: {
    width: width * 0.8,
    height: width * 0.8 * 0.6,
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    gap: 15,
  },
  socialBtn: {
    height: 50,
    width: "100%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: {
    width: 15,
    height: 15,
    marginRight: 8,
  },
  socialText: {
    fontSize: 14,
    fontWeight: "600",
    color: TColor.white,
  },
  orText: {
    textAlign: "center",
    color: TColor.white,
    fontSize: 14,
    marginVertical: 10,
  },
  terms: {
    textAlign: "center",
    color: TColor.white,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 15,
  },
});
