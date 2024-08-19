import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ActivityAction, startActivityAsync } from "expo-intent-launcher";

export default function App() {
  return (
    <View style={styles.container}>
      <Text onPress={() => startActivityAsync(ActivityAction.WIFI_SETTINGS)}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
