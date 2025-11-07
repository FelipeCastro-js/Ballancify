import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    InterBold: require("@/assets/font/Inter-Bold.ttf"),
    InterMedium: require("@/assets/font/Inter-Medium.ttf"),
    InterRegular: require("@/assets/font/Inter-Regular.ttf"),
    InterSemiBold: require("@/assets/font/Inter-SemiBold.ttf"),
  });
  const colorScheme = useColorScheme();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="welcome">
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="social-login" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
