import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <MaterialCommunityIcons
          name="thought-bubble"
          size={250}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Penjelasan</ThemedText>
      </ThemedView>
      <ThemedText>
        Di tab ini kalian akan menemukan penjelasan untuk Bubble Sort, dan
        Langkah-langkahnya
      </ThemedText>
      <Collapsible title="Bubble Sort">
        <ThemedText>
          Deskripsi:{" "}
          <ThemedText type="defaultSemiBold">Bubble Sort </ThemedText>Algoritma
          ini bekerja dengan membandingkan elemen yang berdekatan dan menukar
          mereka jika mereka berada dalam urutan yang salah.{" "}
        </ThemedText>
        <ExternalLink href="https://www.geeksforgeeks.org/bubble-sort-algorithm/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Langkah-langkah">
        <ThemedText>
          ● Mulai dari elemen pertama, bandingkan elemen saat ini dengan elemen
          berikutnya.{"\n"}● Jika elemen saat ini lebih besar, tukar kedua
          elemen.{"\n"}● Lanjutkan langkah 1 dan 2 untuk seluruh elemen dalam
          array.{"\n"}● Ulangi proses ini hingga tidak ada lagi yang perlu
          ditukar.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#DDE6ED",
    bottom: -20,
    left: -10,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
