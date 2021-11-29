import React from "react";
import { StyleSheet, Image, View } from "react-native";

const SettingsTab = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/gif/settings.gif")}
        style={styles.image}
      />
    </View>
  );
};

export default SettingsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: 200,
  },
});
