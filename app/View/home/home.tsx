import { TColor } from "@/components/constants/colors";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomArc from "@/components/ui/custom-arc";
import SegmentButton from "@/components/ui/segment-buttons";
import StatusButton from "@/components/ui/status-button";
import SubScriptionHomeRow from "@/components/ui/subcription-home-row";
import UpcomingBillRow from "@/components/ui/upcoming-bill-row";

const { width } = Dimensions.get("window");
const ARC_SIZE = width * 0.82;

const SUBSCRIPTIONS = [
  {
    name: "Spotify",
    icon: require("@/assets/images/spotify_logo.png"),
    price: "5.99",
  },
  {
    name: "YouTube Premium",
    icon: require("@/assets/images/youtube_logo.png"),
    price: "18.99",
  },
  {
    name: "Microsoft OneDrive",
    icon: require("@/assets/images/onedrive_logo.png"),
    price: "29.99",
  },
  {
    name: "Netflix",
    icon: require("@/assets/images/netflix_logo.png"),
    price: "15.00",
  },
];

const BILLS = [
  { name: "Spotify", date: "2023-06-25", price: "5.99" },
  { name: "YouTube Premium", date: "2023-06-25", price: "18.99" },
  { name: "Microsoft OneDrive", date: "2023-06-25", price: "29.99" },
  { name: "Netflix", date: "2023-06-25", price: "15.00" },
];

interface HomeViewProps {
  onOpenSettings: () => void;
  onOpenSubscriptionInfo: (params: {
    name: string;
    price: string | number;
  }) => void;
}

export default function HomeView({
  onOpenSettings,
  onOpenSubscriptionInfo,
}: HomeViewProps) {
  const [isSubscription, setIsSubscription] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.headerCard}>
          <TouchableOpacity style={styles.settingsBtn} onPress={onOpenSettings}>
            <Image
              source={require("@/assets/images/settings.png")}
              style={styles.settingsIcon}
            />
          </TouchableOpacity>

          <View style={styles.arcBox}>
            <View style={styles.arcPainterBox}>
              <CustomArc end={220} size={ARC_SIZE} />
            </View>

            <View
              style={[
                styles.centerContent,
                { transform: [{ translateY: -width * 0.035 }] },
              ]}
            >
              <Image
                source={require("@/assets/images/app_logo.png")}
                style={styles.appLogo}
                resizeMode="contain"
              />
              <View style={{ height: width * 0.045 }} />
              <Text style={styles.balance}>$1,235</Text>
              <View style={{ height: width * 0.03 }} />
              <Text style={styles.subtitle}>This month bills</Text>
              <View style={{ height: width * 0.05 }} />
              <TouchableOpacity style={styles.budgetBtn}>
                <Text style={styles.budgetText}>See your budget</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.statusRow}>
            <StatusButton
              title="Active subs"
              value="12"
              statusColor={TColor.secondary}
              onPress={() => {}}
            />
            <StatusButton
              title="Highest subs"
              value="$19.99"
              statusColor={TColor.primary10}
              onPress={() => {}}
            />
            <StatusButton
              title="Lowest subs"
              value="$5.99"
              statusColor={TColor.secondaryG}
              onPress={() => {}}
            />
          </View>
        </View>

        <View style={styles.segmentBox}>
          <SegmentButton
            title="Your subscription"
            isActive={isSubscription}
            onPress={() => setIsSubscription(true)}
          />
          <SegmentButton
            title="Upcoming bills"
            isActive={!isSubscription}
            onPress={() => setIsSubscription(false)}
          />
        </View>

        {isSubscription ? (
          <FlatList
            data={SUBSCRIPTIONS}
            keyExtractor={(item) => item.name}
            scrollEnabled={false}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
              <SubScriptionHomeRow
                sObj={item}
                onPress={() =>
                  onOpenSubscriptionInfo({ name: item.name, price: item.price })
                }
              />
            )}
            ListFooterComponent={<View style={{ height: 110 }} />}
          />
        ) : (
          <FlatList
            data={BILLS}
            keyExtractor={(item) => item.name}
            scrollEnabled={false}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => {
              const d = new Date(item.date);
              const month = d.toLocaleString("en-US", { month: "short" });
              const day = String(d.getDate());
              return (
                <UpcomingBillRow
                  sObj={{ name: item.name, price: item.price, month, day }}
                  onPress={() => {}}
                />
              );
            }}
            ListFooterComponent={<View style={{ height: 110 }} />}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: TColor.gray },
  headerCard: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: TColor.gray70,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: TColor.border + "26",
    paddingTop: 18,
    paddingBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
  },
  settingsBtn: { position: "absolute", top: 14, right: 14, zIndex: 2 },
  settingsIcon: { width: 26, height: 26, tintColor: TColor.gray30 },
  arcBox: {
    width: ARC_SIZE,
    height: ARC_SIZE,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  arcPainterBox: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: width * 0.05,
  },
  centerContent: { alignItems: "center", justifyContent: "center" },
  appLogo: { width: width * 0.25, height: width * 0.25 },
  balance: {
    color: TColor.white,
    fontSize: 48,
    fontWeight: "800",
    letterSpacing: 0.2,
  },
  subtitle: { color: TColor.gray40, fontSize: 14, fontWeight: "700" },
  budgetBtn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: TColor.border + "26",
    backgroundColor: TColor.gray60 + "4D",
    borderRadius: 18,
  },
  budgetText: { color: TColor.white, fontSize: 13, fontWeight: "700" },
  statusRow: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  segmentBox: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "black",
    borderRadius: 15,
    padding: 8,
    gap: 8,
    height: 50,
  },
  listContent: { paddingHorizontal: 20 },
});
