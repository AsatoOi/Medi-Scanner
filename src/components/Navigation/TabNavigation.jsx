import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView, Image, View } from "react-native";

import CameraButton1 from "../../../assets/images/camera-button-1.png";
import HomeIcon from "../../../assets/images/home-icon.png";
import FavoriteIcon from "../../../assets/images/favorite-icon.png";
import { CameraScreen } from "../screens/CameraScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { theme } from "../../style/theme";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          showLabel: false,
          position: "absolute",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: 113,
          shadowColor: "black",
          shadowOpacity: 0.07,
          shadowRadius: 15,
          shadowOffset: { width: 0, height: -10 },
          paddingHorizontal: 20,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <SafeAreaView style={{ position: "absolute", top: "35%" }}>
              <Image
                source={HomeIcon}
                style={{
                  width: 32,
                  height: 32,
                  opacity: focused ? 1 : 0.5,
                }}
              />
            </SafeAreaView>
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: () => (
            <SafeAreaView>
              <View
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: theme.mc,
                  borderRadius: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={CameraButton1}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
            </SafeAreaView>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ focused }) => (
            <SafeAreaView style={{ position: "absolute", top: "35%" }}>
              <Image
                source={FavoriteIcon}
                style={{
                  width: 32,
                  height: 32,
                  opacity: focused ? 1 : 0.5,
                }}
              />
            </SafeAreaView>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
