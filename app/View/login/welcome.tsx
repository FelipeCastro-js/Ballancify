import { TColor } from "@/components/constants/colors";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";
import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function WelcomeView() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: TColor.gray }]}>
      {/* Fondo */}
      <Image
        source={require("@/assets/images/welcome_screen.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Contenido */}
      <SafeAreaView style={styles.safeArea}>
        <Image
          source={require("@/assets/images/app_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.description}>
          Control your expenses. Improve your finances.{"\n"}
          Record, analyze, and optimize your daily activities with a simple and
          powerful tool.
        </Text>

        <View style={{ height: 30 }} />

        <PrimaryButton
          title="Get started"
          onPress={() => navigation.navigate("social-login" as never)}
        />

        <View style={{ height: 15 }} />

        <SecondaryButton
          title="I have an account"
          onPress={() => navigation.navigate("sign-in" as never)}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // ✅ funciona en Android e iOS
  },
  safeArea: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logo: {
    width: width * 0.5,
    marginBottom: 20,
  },
  description: {
    textAlign: "center",
    color: TColor.white,
    fontSize: 14,
    fontFamily: "InterRegular",
    marginBottom: 20,
  },
});
