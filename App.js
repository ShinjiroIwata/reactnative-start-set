import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="詳細へ"
        onPress={() => {
          navigation.navigate("Detail");
        }}
      ></Button>
    </View>
  );
};
const DetailScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail</Text>
    </View>
  );
};

const DetailScreen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail</Text>
    </View>
  );
};
const DetailScreen3 = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail</Text>
    </View>
  );
};
const DetailScreen4 = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail</Text>
    </View>
  );
};

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: "ホーム" }}
          component={HomeScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Detail"
          options={{ title: "詳細" }}
          component={DetailScreen}
        ></Stack.Screen>
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
        <Tab.Screen name="Detail2" component={DetailScreen2} />
        <Tab.Screen name="Detail3" component={DetailScreen3} />
        <Tab.Screen name="Detail4" component={DetailScreen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
