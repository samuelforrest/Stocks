import { View, Text } from './Themed';
import React from 'react';
import { LineGraph, GraphPoint } from "react-native-graph";
import Colors from '../constants/Colors';
import timeseries from "@/assets/data/timeseries.json"

const Graph = () => {
  
  const points: GraphPoint[] = timeseries.values.map((value) => 
    ({date: new Date(value.datetime),
      value: Number.parseFloat(value.close),
  }));

  return (
    <View>
      <Text>Graph</Text>

      <LineGraph
        style={{ width: "100%", height: 300 }}
        points={points}
        animated={true} 
        color={Colors.light.tint}
        gradientFillColors={["#fff", "#008000"]} //change in for Colors.light.tint when working
      />

    </View>

  )
}

export default Graph