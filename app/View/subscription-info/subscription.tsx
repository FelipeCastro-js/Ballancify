import { TColor } from "@/components/constants/colors";
import ItemRow from "@/components/ui/item-row";
import SecondaryButton from "@/components/ui/secondary-button";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DashedLine from "react-native-dashed-line";

const { width } = Dimensions.get("window");
const CARD_TOP_H = width * 0.9;

interface SubscriptionInfoViewProps {
  sObj: { icon: any; name?: string; price?: string | number };
}

export default function SubscriptionInfoView({
  sObj,
}: SubscriptionInfoViewProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardWrapper}>
          <View style={styles.card}>
            <View style={styles.top}>
              <View style={styles.headerRow}>
                <Pressable
                  android_ripple={{ color: TColor.gray50 }}
                  onPress={() => router.back()}
                >
                  <Image
                    source={require("@/assets/images/dorp_down.png")}
                    style={[styles.hIcon, { tintColor: TColor.gray30 }]}
                  />
                </Pressable>
                <Text style={styles.headerTitle}>Subscription info</Text>
                <Pressable
                  android_ripple={{ color: TColor.gray50 }}
                  onPress={() => router.back()}
                >
                  <Image
                    source={require("@/assets/images/Trash.png")}
                    style={[
                      styles.hIcon,
                      { tintColor: TColor.gray30, width: 25, height: 25 },
                    ]}
                  />
                </Pressable>
              </View>

              <View style={styles.centerBox}>
                <Image source={sObj.icon} style={styles.subIcon} />
                <View style={{ height: 20 }} />
                <Text style={styles.name}>{sObj.name || ""}</Text>
                <View style={{ height: 15 }} />
                <Text style={styles.price}>${sObj.price || ""}</Text>
              </View>
            </View>

            <View style={styles.body}>
              <View style={styles.infoBox}>
                <ItemRow title="Name" value={sObj.name || ""} />
                <ItemRow title="Description" value="Music app" />
                <ItemRow title="Category" value="Entertainment" />
                <ItemRow title="First payment" value="08.07.2023" />
                <ItemRow title="Reminder" value="Never" />
                <ItemRow title="Currency" value="USD ($)" />
              </View>
              <View style={{ height: 20 }} />
              <SecondaryButton title="Save" onPress={() => {}} />
            </View>
          </View>

          <View pointerEvents="none" style={styles.dottedLineOverlay}>
            <View style={styles.circle} />
            <DashedLine
              style={{ flex: 1 }}
              dashLength={5}
              dashGap={10}
              dashThickness={1}
              dashColor={TColor.gray}
            />
            <View style={styles.circle} />
          </View>
        </View>
        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: TColor.gray },
  cardWrapper: { margin: 20 },
  card: {
    borderRadius: 24,
    backgroundColor: "#282833E6",
    overflow: "hidden",
    elevation: 1,
  },
  top: {
    height: CARD_TOP_H,
    backgroundColor: TColor.gray70,
    padding: 15,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hIcon: { width: 20, height: 20, resizeMode: "contain" },
  headerTitle: { color: TColor.gray30, fontSize: 16, fontWeight: "600" },
  centerBox: { flex: 1, alignItems: "center", justifyContent: "center" },
  subIcon: { width: width * 0.25, height: width * 0.25, resizeMode: "contain" },
  name: { color: TColor.white, fontSize: 32, fontWeight: "700" },
  price: { color: TColor.gray30, fontSize: 20, fontWeight: "700" },
  body: { paddingVertical: 20, paddingHorizontal: 20 },
  infoBox: {
    borderWidth: 1,
    borderColor: TColor.border + "1A",
    backgroundColor: TColor.gray60 + "33",
    borderRadius: 16,
    paddingVertical: 10,
    overflow: "hidden",
  },
  dottedLineOverlay: {
    position: "absolute",
    left: 4,
    right: 4,
    top: 20,
    height: CARD_TOP_H + 15,
    alignItems: "center",
    flexDirection: "row",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: TColor.gray,
  },
});
