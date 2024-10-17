import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SortingVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState<boolean>(false);
  const [currentBars, setCurrentBars] = useState<number[]>([]); // Indeks bar yang sedang berpindah

  // Generate random array
  const generateArray = () => {
    const arr = Array.from(
      { length: 15 },
      () => Math.floor(Math.random() * (150 - 5 + 1)) + 5
    );
    setArray(arr);
  };

  useEffect(() => {
    generateArray();
  }, []);

  // Bubble Sort Implementation
  const bubbleSort = async () => {
    setSorting(true);
    const arr = [...array];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setCurrentBars([j, j + 1]); // Set indeks bar yang sedang berpindah
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Delay for visualization
      }
    }
    setSorting(false);
    setCurrentBars([]); // Reset current bars
  };

  // Insertion Sort Implementation
  const insertionSort = async () => {
    setSorting(true);
    const arr = [...array];
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        setCurrentBars([j, j + 1]); // Set indeks bar yang sedang berpindah
        arr[j + 1] = arr[j];
        j--;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Delay for visualization
      }
      arr[j + 1] = key;
      setArray([...arr]);
    }
    setSorting(false);
    setCurrentBars([]); // Reset current bars
  };

  // Selection Sort Implementation
  const selectionSort = async () => {
    setSorting(true);
    const arr = [...array];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        setCurrentBars([minIdx, j]); // Set indeks bar yang sedang berpindah
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      }
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 100)); // Delay for visualization
    }
    setSorting(false);
    setCurrentBars([]); // Reset current bars
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.arrayContainer}>
          {array.map((value, index) => (
            <View
              key={index}
              style={{
                ...styles.bar,
                height: value * 3, // Scale the height for better visibility
                backgroundColor: currentBars.includes(index) // Change color if bar is moving
                  ? "#ffa502" // Warna untuk bar yang sedang berpindah
                  : sorting
                  ? "#ff4757" // Warna saat sorting berlangsung
                  : "#2ed573", // Warna normal
              }}
            >
              <Text style={styles.barText}>{value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            title="Generate New Array"
            onPress={generateArray}
            disabled={sorting}
          />
          <Button title="Bubble Sort" onPress={bubbleSort} disabled={sorting} />
          <Button
            title="Insertion Sort"
            onPress={insertionSort}
            disabled={sorting}
          />
          <Button
            title="Selection Sort"
            onPress={selectionSort}
            disabled={sorting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  arrayContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 20,
  },
  bar: {
    width: 15,
    marginHorizontal: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  barText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  buttonsContainer: {
    marginTop: 20,
    width: "80%",
    justifyContent: "space-between",
    height: 150,
  },
});

export default SortingVisualizer;
