import {Text, View} from "./Themed";
import {MonoText} from "./StyledText";
import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

type Stock = {
  name: string;
  symbol: string;
  close: string;
  percent_change: string;
}

type StockListItem = {
  stock: Stock
}

export default function StockListItem({stock}: StockListItem) {

  const change = Number.parseFloat(stock.percent_change);

  return ( //We may only have one item in the return tag - the view
    <View style={styles.container}>
      
      {/*Left Container*/}
      <View style={{ flex:1 }}>
        <Text style={styles.symbol}>{stock.symbol} <AntDesign name="staro" size={18} color="gray" /></Text>
        <Text style={{color: "gray"}}>{stock.name}</Text>
      </View>
      
      {/*Right Container*/}
      <View style={{ alignItems: "flex-end" }}>
        <MonoText>${Number.parseFloat(stock.close).toFixed(1)}</MonoText>
        <MonoText style={{ color: change > 0? "green" : "red" }}>{change > 0 ? "+" : ""}{change.toFixed(1)}%</MonoText>
      </View>

    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flexDirection: "row",
  },
  symbol: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.tint,
  }
});