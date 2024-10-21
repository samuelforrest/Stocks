import { View, Text } from "@/src/components/Themed";
import { useLocalSearchParams } from "expo-router";
import React from 'react'

const StockDetails = () => {
  const { symbol } = useLocalSearchParams();

  return (
    <View>
      <Text>Hello World! {symbol}</Text>
    </View>
  )
}

export default StockDetails;