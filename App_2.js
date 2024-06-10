import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Welcome } from "./Welcome";
import { useState, useEffect } from "react";

const useClock = () => {
  const [date, setDate] = useState(() => new Date());
  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);
  return date;
};

export default function App() {
  const date = useClock();
  const [count, setCount] = useState(0);
  const [name] = useState("sara");

  const onPressMinusOne = () => {
    setCount(count - 1);
  };
  const onPressPlusOne = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Button title="-1" onPress={onPressMinusOne} />
      <Text>{count}</Text>
      <Text>{date.toLocaleTimeString()}</Text>
      <Button title="+1" onPress={onPressPlusOne} />
      <Welcome name={name}></Welcome>
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
