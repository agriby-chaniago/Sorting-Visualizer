import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

import { useThemeColor } from "@/hooks/useThemeColor";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  style?: object;
  titleStyle?: object;
}

export default function Collapsible({
  title,
  children,
  style,
  titleStyle,
}: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useThemeColor({}, "icon");

  return (
    <ThemedView style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <Ionicons
          name={isOpen ? "chevron-down" : "chevron-forward-outline"}
          size={18}
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        />
        <ThemedText
          type="defaultSemiBold"
          style={[styles.headingText, titleStyle]}
        >
          {title}
        </ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#010101", // Dark Blue for heading background
    // borderRadius: 5,
  },
  headingText: {
    color: "#14ffec", // Light Beige for heading text
  },
  content: {
    backgroundColor: "#010101", // Dark Blue for content background
    padding: 10,
    // borderRadius: 5,
  },
});
