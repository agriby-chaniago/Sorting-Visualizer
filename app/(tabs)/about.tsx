import { StyleSheet } from "react-native";

import Collapsible from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#323232", dark: "#212121" }} // Updated color palette
      headerImage={
        <MaterialCommunityIcons
          name="thought-bubble"
          size={250}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.titleText}>
            About
          </ThemedText>
        </ThemedView>
        <ThemedText style={styles.text}>
          Selamat datang di aplikasi Sorting Visualizer! Aplikasi ini
          menyediakan representasi visual dari berbagai algoritma pengurutan
          untuk membantu Anda memahami cara kerjanya.
        </ThemedText>
        <Collapsible
          title="Bagaimana Aplikasi Bekerja"
          titleStyle={styles.collapsibleTitle}
        >
          <ThemedText style={styles.text}>
            Aplikasi ini memvisualisasikan berbagai algoritma pengurutan langkah
            demi langkah. Anda dapat menghasilkan serangkaian angka acak baru
            dan kemudian memilih algoritma pengurutan untuk melihat bagaimana
            algoritma tersebut mengurutkan serangkaian angka secara real-time.
          </ThemedText>
          <ThemedText style={styles.text}>
            Algoritma pengurutan yang tersedia meliputi:
          </ThemedText>
          <ThemedText style={styles.text}>
            ● Bubble Sort{"\n"}● Insertion Sort{"\n"}● Selection Sort
          </ThemedText>
        </Collapsible>
        <Collapsible
          title="Menggunakan Aplikasi"
          titleStyle={styles.collapsibleTitle}
        >
          <ThemedText style={styles.text}>
            ● Untuk membuat array baru, klik tombol "Generate New Array".
            {"\n"}● Pilih algoritma pengurutan dengan mengklik tombol yang
            sesuai.
            {"\n"}● Lihat bagaimana array diurutkan langkah demi langkah..
            {"\n"}● Bar-bar tersebut mewakili elemen-elemen dari array, dan
            tingginya sesuai dengan nilai-nilai elemen tersebut.
          </ThemedText>
        </Collapsible>
        <Collapsible title="Learn More" titleStyle={styles.collapsibleTitle}>
          <ThemedText style={styles.text}>
            Untuk informasi lebih lanjut tentang algoritma pengurutan, Anda
            dapat mengunjungi link-link berikut:
          </ThemedText>
          <ExternalLink href="https://www.geeksforgeeks.org/sorting-algorithms/">
            <ThemedText type="link" style={styles.linkText}>
              GeeksforGeeks - Sorting Algorithms
            </ThemedText>
          </ExternalLink>
          <ExternalLink href="https://en.wikipedia.org/wiki/Sorting_algorithm">
            <ThemedText type="link" style={styles.linkText}>
              Wikipedia - Sorting Algorithm
            </ThemedText>
          </ExternalLink>
        </Collapsible>
        <Collapsible title="Our Team" titleStyle={styles.collapsibleTitle}>
          <ThemedText style={styles.text}>
            Nuqi Developer Team:{"\n"}
            <ThemedText style={styles.text}>
              ● Agriby D. Chaniago |
              <ExternalLink href="https://github.com/agriby-chaniago">
                <ThemedText type="link" style={styles.linkText}>
                  {"\t"}{" "}
                  <MaterialCommunityIcons
                    name="github"
                    size={16}
                    style={styles.linkText}
                  />{" "}
                  GitHub
                </ThemedText>
              </ExternalLink>
              {"\n"}● Muhammad Humam Nuqi |
              <ExternalLink href="https://github.com/HumamNuqi">
                <ThemedText type="link" style={styles.linkText}>
                  {"\t"}{" "}
                  <MaterialCommunityIcons
                    name="github"
                    size={16}
                    style={styles.linkText}
                  />{" "}
                  GitHub
                </ThemedText>
              </ExternalLink>
              {"\n"}● Fakhri Zahi Mumtaza |
              <ExternalLink href="https://github.com/HelixStar">
                <ThemedText type="link" style={styles.linkText}>
                  {"\t"}{" "}
                  <MaterialCommunityIcons
                    name="github"
                    size={16}
                    style={styles.linkText}
                  />{" "}
                  GitHub
                </ThemedText>
              </ExternalLink>
              {"\n"}● Setiawan |
              <ExternalLink href="https://github.com/Akuaja7">
                <ThemedText type="link" style={styles.linkText}>
                  {"\t"}{" "}
                  <MaterialCommunityIcons
                    name="github"
                    size={16}
                    style={styles.linkText}
                  />{" "}
                  GitHub
                </ThemedText>
              </ExternalLink>
              {"\n"}● Safa Kiana |
              <ExternalLink href="https://github.com/kianasafa444">
                <ThemedText type="link" style={styles.linkText}>
                  {"\t"}{" "}
                  <MaterialCommunityIcons
                    name="github"
                    size={16}
                    style={styles.linkText}
                  />{" "}
                  GitHub
                </ThemedText>
              </ExternalLink>
            </ThemedText>
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
