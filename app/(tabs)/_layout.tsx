import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="bar-chart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bubbleSort"
        options={{
          title: "Bubble Sort",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="bubble-chart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="insertionSort"
        options={{
          title: "Insertion Sort",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="insert-chart-outlined"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="selectionSort"
        options={{
          title: "Selection Sort",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="stacked-bar-chart" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
