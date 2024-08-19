import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ActivityAction, startActivityAsync } from "expo-intent-launcher";
import { openApplication } from "expo-open-package";

export default function App() {
  return (
    <View style={styles.container}>
      <Text onPress={() => startActivityAsync(ActivityAction.WIFI_SETTINGS)}>
        execute expo-intent-launcher
      </Text>
      <Text onPress={() => openApplication("com.facebook.katana")}>
        execute expo-open-package
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
