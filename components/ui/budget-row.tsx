// components/ui/budgets-row.tsx
import { TColor } from "@/components/constants/colors";
import React from "react";
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import * as Progress from "react-native-progress";

type BudgetProps = {
  bObj: {
    icon: any;
    name: string;
    left_amount: string;
    spend_amount: string;
    total_budget: string;
    color: string;
  };
  onPress: () => void;
};

export default function BudgetsRow({ bObj, onPress }: BudgetProps) {
  const left = parseFloat(bObj.left_amount) || 0;
  const total = parseFloat(bObj.total_budget) || 0;
  const progress = total > 0 ? left / total : 0;

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={bObj.icon} style={styles.icon} />
          <View style={styles.info}>
            <Text style={styles.name}>{bObj.name}</Text>
            <Text style={styles.subtext}>
              ${bObj.left_amount} left to spend
            </Text>
          </View>
          <View style={styles.amounts}>
            <Text style={styles.amount}>${bObj.spend_amount}</Text>
            <Text style={styles.subtext}>of ${bObj.total_budget}</Text>
          </View>
        </View>

        <View style={{ marginTop: 8 }}>
          <Progress.Bar
            progress={progress}
            width={null}
            height={3}
            color={bObj.color}
            unfilledColor={TColor.gray60}
            borderWidth={0}
            borderRadius={2}
            style={styles.progress}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 8,
    borderRadius: 16,
  },
  container: {
    padding: 10,
    borderRadius: 16,
    backgroundColor: TColor.gray60 + "1A", // 10% opacity
    borderWidth: 1,
    borderColor: TColor.border + "0D", // 5% opacity
  } as ViewStyle,
  row: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  icon: {
    width: 30,
    height: 30,
    tintColor: TColor.gray40,
    marginRight: 10,
  } as ImageStyle,
  info: {
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
  name: {
    color: TColor.white,
    fontSize: 14,
    fontWeight: "600",
  } as TextStyle,
  subtext: {
    color: TColor.gray30,
    fontSize: 12,
    fontWeight: "500",
  } as TextStyle,
  amounts: {
    alignItems: "flex-end",
  } as ViewStyle,
  amount: {
    color: TColor.white,
    fontSize: 14,
    fontWeight: "600",
  } as TextStyle,
  progress: {
    height: 3,
    borderRadius: 2,
  },
});
