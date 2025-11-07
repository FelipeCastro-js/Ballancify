import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const colorScheme = useColorScheme();

  if (!fontsLoaded) {
    return null;
  }

  const screens = ["welcome", "social-login", "sign-in", "sign-up"];

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {isLoggedIn ? (
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        ) : (
          screens.map((name) => (
            <Stack.Screen
              key={name}
              name={name}
              options={{ headerShown: false }}
            />
          ))
        )}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
