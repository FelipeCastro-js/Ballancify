import HomeView from "@/app/View/home/home";
import { useRouter } from "expo-router";
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <HomeView
      onOpenSettings={() => router.push("/settings")}
      onOpenSubscriptionInfo={(params) =>
        router.push({ pathname: "/subscription", params })
      }
    />
  );
}
