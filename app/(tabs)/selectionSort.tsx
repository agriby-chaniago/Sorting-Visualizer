import { StyleSheet } from "react-native";

import Collapsible from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function selectionSortScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#323232", dark: "#212121" }} // Updated color palette
      headerImage={
        <MaterialIcons
          name="stacked-line-chart"
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
          Di tab ini kalian akan menemukan penjelasan untuk Selection Sort, dan
          Langkah-langkahnya
        </ThemedText>
        <Collapsible
          title="Selection Sort"
          titleStyle={styles.collapsibleTitle}
        >
          <ThemedText style={styles.text}>
            Deskripsi:{" "}
            <ThemedText type="defaultSemiBold" style={styles.text}>
              Selection Sort
            </ThemedText>{" "}
            Algoritma ini bekerja dengan mencari elemen terkecil dalam array dan
            menukarnya dengan elemen pertama. Proses ini diulang untuk sisa
            elemen.{" "}
          </ThemedText>
          <ExternalLink href="https://www.geeksforgeeks.org/selection-sort-algorithm-2/">
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
            ● Mulai dari elemen pertama, bandingkan elemen saat ini dengan
            elemen berikutnya.{"\n"}● Jika elemen saat ini lebih besar, tukar
            kedua elemen.{"\n"}● Lanjutkan langkah 1 dan 2 untuk seluruh elemen
            dalam array.{"\n"}● Ulangi proses ini hingga tidak ada lagi yang
            perlu ditukar.
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
