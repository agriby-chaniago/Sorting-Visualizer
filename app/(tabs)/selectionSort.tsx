import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <MaterialIcons
          name="stacked-line-chart"
          size={250}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Penjelasan</ThemedText>
      </ThemedView>
      <ThemedText>
        Di tab ini kalian akan menemukan penjelasan untuk Selection Sort, dan
        Langkah-langkahnya
      </ThemedText>
      <Collapsible title="Selection Sort">
        <ThemedText>
          Deskripsi:{" "}
          <ThemedText type="defaultSemiBold">Selection Sort</ThemedText>{" "}
          Algoritma ini bekerja dengan mencari elemen terkecil dalam array dan
          menukarnya dengan elemen pertama. Proses ini diulang untuk sisa
          elemen.{" "}
        </ThemedText>
        <ExternalLink href="https://www.geeksforgeeks.org/selection-sort-algorithm-2/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Langkah-langkah">
        <ThemedText>
          ● Temukan elemen terkecil dari array.{"\n"}● Tukar elemen terkecil
          dengan elemen pertama. elemen.{"\n"}● Ulangi langkah 1 dan 2 untuk
          sub-array yang tersisa.{"\n"}
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#DDE6ED",
    bottom: -47,
    left: -41,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
