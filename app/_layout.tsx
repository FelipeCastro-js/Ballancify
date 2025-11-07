import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    InterBold: require("@/assets/font/Inter-Bold.ttf"),
    InterMedium: require("@/assets/font/Inter-Medium.ttf"),
    InterRegular: require("@/assets/font/Inter-Regular.ttf"),
    InterSemiBold: require("@/assets/font/Inter-SemiBold.ttf"),
  });
  const [isLoggedIn] = useState(true);
  const colorScheme = useColorScheme();
  if (!fontsLoaded) return null;

  const screens = ["welcome", "social-login", "sign-in", "sign-up"];

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen
              name="settings"
              options={{
                animation: "slide_from_bottom",
                presentation: "containedModal",
                gestureEnabled: true,
                gestureDirection: "vertical",
              }}
            />
            <Stack.Screen
              name="subscription"
              options={{
                animation: "slide_from_right",
                gestureEnabled: true,
              }}
            />
          </>
        ) : (
          screens.map((n) => <Stack.Screen key={n} name={n} />)
        )}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
