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
          name="chart-bar-stacked"
          size={250}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Penjelasan</ThemedText>
      </ThemedView>
      <ThemedText>
        Di tab ini kalian akan menemukan penjelasan untuk Insertion Sort, dan
        Langkah-langkahnya
      </ThemedText>
      <Collapsible title="Insertion Sort">
        <ThemedText>
          Deskripsi:{" "}
          <ThemedText type="defaultSemiBold">Insertion Sort </ThemedText>
          Algoritma ini bekerja dengan membagi array menjadi dua bagian: yang
          terurut dan yang belum terurut. Elemen dari bagian yang belum terurut
          akan dimasukkan satu per satu ke posisi yang tepat dalam bagian yang
          terurut.{" "}
        </ThemedText>
        <ExternalLink href="https://www.geeksforgeeks.org/insertion-sort-algorithm/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Langkah-langkah">
        <ThemedText>
          ● Ambil elemen pertama sebagai bagian terurut.{"\n"}● Ambil elemen
          berikutnya dan bandingkan dengan elemen dalam bagian terurut dari
          kanan ke kiri.{"\n"}● Tempatkan elemen tersebut pada posisi yang
          tepat.{"\n"}● Ulangi proses ini untuk semua elemen.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#DDE6ED",
    bottom: -54,
    left: -45,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
