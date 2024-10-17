import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SortingVisualizer from "../../components/SortingVIsualizer";

const App = () => {
  return (
    <GestureHandlerRootView>
      <SortingVisualizer />
    </GestureHandlerRootView>
  );
};

export default App;
