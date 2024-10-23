import { StyleSheet } from "react-native";

import Collapsible from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function insertionSortScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#323232", dark: "#212121" }} // Updated color palette
      headerImage={
        <MaterialCommunityIcons
          name="chart-bar-stacked"
          size={250}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.titleText}>
            Penjelasan
          </ThemedText>
        </ThemedView>
        <ThemedText style={styles.text}>
          Di tab ini kalian akan menemukan penjelasan untuk Insertion Sort, dan
          Langkah-langkahnya
        </ThemedText>
        <Collapsible
          title="Insertion Sort"
          titleStyle={styles.collapsibleTitle}
        >
          <ThemedText style={styles.text}>
            Deskripsi:{" "}
            <ThemedText type="defaultSemiBold" style={styles.text}>
              Insertion Sort
            </ThemedText>{" "}
            Algoritma ini bekerja dengan membagi array menjadi dua bagian: yang
            sudah diurutkan dan yang belum diurutkan. Elemen dari bagian yang
            belum diurutkan diambil dan ditempatkan pada posisi yang benar di
            bagian yang sudah diurutkan.
          </ThemedText>
          <ExternalLink href="https://www.geeksforgeeks.org/insertion-sort-algorithm/">
            <ThemedText type="link" style={styles.linkText}>
              Learn more
            </ThemedText>
          </ExternalLink>
        </Collapsible>
        <Collapsible
          title="Langkah-langkah"
          titleStyle={styles.collapsibleTitle}
        >
          <ThemedText style={styles.text}>
            ● Mulai dari elemen kedua, bandingkan elemen saat ini dengan elemen
            sebelumnya.{"\n"}● Jika elemen saat ini lebih kecil, pindahkan
            elemen saat ini ke posisi yang benar di bagian yang sudah diurutkan.
            {"\n"}● Lanjutkan langkah 1 dan 2 untuk seluruh elemen dalam array.
          </ThemedText>
        </Collapsible>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#fff", // Light Beige for header image
    bottom: -20,
    left: -10,
    position: "absolute",
  },
  container: {
    backgroundColor: "#010101", // Dark Blue for background color
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#010101", // Dark Blue for background color
  },
  titleText: {
    color: "#fff", // Light Beige for title text
  },
  text: {
    color: "#fff", // Light Beige for regular text
  },
  collapsibleTitle: {
    color: "#fff", // Light Beige for collapsible title text
  },
  linkText: {
    color: "#0d7377", // Light Blue for link text
  },
});
