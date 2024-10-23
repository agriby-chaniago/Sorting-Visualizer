import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SortingVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState<boolean>(false);
  const [currentBars, setCurrentBars] = useState<number[]>([]); // Indeks bar yang sedang berpindah

  // Generate random array
  const generateArray = () => {
    const arr = Array.from(
      { length: 12 },
      () => Math.floor(Math.random() * (120 - 5 + 1)) + 5
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
                  ? "#14ffec" // Light Blue for bars that are moving
                  : sorting
                  ? "#0d7377" // Medium Blue during sorting
                  : "#323232", // Light Beige for normal bars
              }}
            >
              <Text style={styles.barText}>{value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={generateArray}
            disabled={sorting}
            style={[
              styles.button,
              { backgroundColor: sorting ? "#212121" : "#323232" }, // Light Blue during sorting, Medium Blue otherwise
            ]}
          >
            <Text style={styles.buttonText}>Generate New Array</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={bubbleSort}
            disabled={sorting}
            style={[
              styles.button,
              { backgroundColor: sorting ? "#212121" : "#323232" }, // Light Blue during sorting, Medium Blue otherwise
            ]}
          >
            <Text style={styles.buttonText}>Bubble Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={insertionSort}
            disabled={sorting}
            style={[
              styles.button,
              { backgroundColor: sorting ? "#212121" : "#323232" }, // Light Blue during sorting, Medium Blue otherwise
            ]}
          >
            <Text style={styles.buttonText}>Insertion Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={selectionSort}
            disabled={sorting}
            style={[
              styles.button,
              { backgroundColor: sorting ? "#212121" : "#323232" }, // Light Blue during sorting, Medium Blue otherwise
            ]}
          >
            <Text style={styles.buttonText}>Selection Sort</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#010101", // Dark Blue for background
    paddingBottom: 20,
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
    marginTop: 25,
    width: 20,
    marginHorizontal: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  barText: {
    color: "#14ffec", // Dark Blue for text color
    fontSize: 10,
    fontWeight: "bold",
  },
  buttonsContainer: {
    marginTop: 50,
    marginBottom: 75,
    width: "80%",
    justifyContent: "space-between",
    height: 150,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#0d7377", // Medium Blue for button background
  },
  buttonText: {
    color: "#14ffec", // Light Beige for button text color
    fontWeight: "bold",
  },
  disableButton: {
    backgroundColor: "#323232", // Light Blue for disable button background
  },
});

export default SortingVisualizer;
