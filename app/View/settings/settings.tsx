import { TColor } from "@/components/constants/colors";
import { IconItemRow, IconItemSwitchRow } from "@/components/ui/icon-item-row";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function SettingsView() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[styles.container, { paddingTop: insets.top }]}
      edges={["top"]}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={[styles.header, { marginTop: 8 }]}>
          <Pressable
            android_ripple={{ color: TColor.gray50 }}
            onPress={() => router.back()}
            style={styles.headerBtn}
          >
            <Image
              source={require("@/assets/images/back.png")}
              style={[styles.backIcon, { tintColor: TColor.gray30 }]}
            />
          </Pressable>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        <View style={[styles.center, { marginTop: 16 }]}>
          <Image
            source={require("@/assets/images/u1.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>Code For Any</Text>
          <Text style={styles.email}>codeforany@gmail.com</Text>
        </View>

        <Pressable
          android_ripple={{ color: TColor.gray50 }}
          style={styles.editButton}
        >
          <Text style={styles.editButtonText}>Edit profile</Text>
        </Pressable>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          <View style={styles.sectionBox}>
            <IconItemRow
              title="Security"
              icon={require("@/assets/images/face_id.png")}
              value="FaceID"
            />
            <IconItemSwitchRow
              title="iCloud Sync"
              icon={require("@/assets/images/icloud.png")}
              value={isActive}
              didChange={setIsActive}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My subscription</Text>
          <View style={styles.sectionBox}>
            <IconItemRow
              title="Sorting"
              icon={require("@/assets/images/sorting.png")}
              value="Date"
            />
            <IconItemRow
              title="Summary"
              icon={require("@/assets/images/chart.png")}
              value="Average"
            />
            <IconItemRow
              title="Default currency"
              icon={require("@/assets/images/money.png")}
              value="USD ($)"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appearance</Text>
          <View style={styles.sectionBox}>
            <IconItemRow
              title="App icon"
              icon={require("@/assets/images/app_icon.png")}
              value="Default"
            />
            <IconItemRow
              title="Theme"
              icon={require("@/assets/images/light_theme.png")}
              value="Dark"
            />
            <IconItemRow
              title="Font"
              icon={require("@/assets/images/font.png")}
              value="Inter"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: TColor.gray },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  headerBtn: {
    position: "absolute",
    left: 16,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    padding: 6,
    borderRadius: 20,
  },
  backIcon: { width: 25, height: 25 },
  headerTitle: { color: TColor.gray30, fontSize: 16, fontWeight: "600" },
  center: { alignItems: "center", marginBottom: 20 },
  avatar: { width: 70, height: 70, marginBottom: 8 },
  name: { color: TColor.white, fontSize: 20, fontWeight: "700" },
  email: {
    color: TColor.gray30,
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
  },
  editButton: {
    alignSelf: "center",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: TColor.border + "26",
    backgroundColor: TColor.gray60 + "33",
    elevation: 0.5,
  },
  editButtonText: { color: TColor.white, fontSize: 12, fontWeight: "600" },
  section: { marginHorizontal: 20, marginTop: 20 },
  sectionTitle: {
    color: TColor.white,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  sectionBox: {
    borderWidth: 1,
    borderColor: TColor.border + "1A",
    backgroundColor: TColor.gray60 + "33",
    borderRadius: 16,
    paddingVertical: 8,
    overflow: "hidden",
  },
});
