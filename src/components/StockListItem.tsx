import {Text, View} from "./Themed";
import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

type Stock = {
  name: String;
  symbol: String;
  close: String;
  percent_change: String;
}

type StockListItem = {
  stock: Stock
}

export default function StockListItem({stock}: StockListItem) {
  return ( //We may only have one item in the return tag - the view
    <View style={styles.container}> 
      <Text style={styles.symbol}>{stock.symbol} <AntDesign name="staro" size={24} color="black" /></Text>
      <Text style={{color: "gray"}}>{stock.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {

  },
  symbol: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.tint,
  }
});