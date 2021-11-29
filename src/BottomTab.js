import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import HomeTab from "./TabScreens/HomeTab";
import StorageTab from "./TabScreens/StorageTab";
import FavouriteTab from "./TabScreens/FavouriteTab";
import ProfileTab from "./TabScreens/ProfileTab";
import SettingsTab from "./TabScreens/SettingsTab";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: "Discover",
          headerStyle: {
            backgroundColor: "#fff",
            height: 120,
          },
          headerTintColor: "#404040",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 35,
            alignSelf: "center",
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <AntDesign
                name="search1"
                size={30}
                color="#404040"
                style={{ marginRight: 10 }}
              />
            </View>
          ),
          headerLeft: () => (
            <View style={{ flexDirection: "row" }}>
              <Foundation
                name="thumbnails"
                size={30}
                color="#404040"
                style={{ marginLeft: 10 }}
              />
            </View>
          ),
          headerShown: true,
          tabBarActiveTintColor: "#ff8080",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="StorageTab"
        component={StorageTab}
        options={{
          title: "Saved Blogs",
          headerStyle: {
            backgroundColor: "#fff",
            height: 120,
          },
          headerTintColor: "#404040",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 35,
            alignSelf: "center",
          },
          headerTitleAlign: "center",
          tabBarActiveTintColor: "#ff8080",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="folderopen" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteTab"
        component={FavouriteTab}
        options={{
          title: "Liked Blogs",
          headerStyle: {
            backgroundColor: "#fff",
            height: 120,
          },
          headerTintColor: "#404040",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 35,
            alignSelf: "center",
          },
          headerTitleAlign: "center",
          tabBarActiveTintColor: "#ff8080",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-border" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#fff",
            height: 120,
          },
          headerTintColor: "#404040",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 35,
            alignSelf: "center",
          },
          headerTitleAlign: "center",
          tabBarActiveTintColor: "#ff8080",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsTab}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: "#fff",
            height: 120,
          },
          headerTintColor: "#404040",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 35,
            alignSelf: "center",
          },
          headerTitleAlign: "center",
          tabBarActiveTintColor: "#ff8080",
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
