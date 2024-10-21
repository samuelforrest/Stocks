import { View, Text } from './Themed';
import React from 'react';
import { LineGraph, GraphPoint } from "react-native-graph";
import Colors from '../constants/Colors';
import timeseries from "@/assets/data/timeseries.json"

const Graph = () => {
  
  const graphPoints: GraphPoint[] = timeseries.values.map((value) => 
    ({date: new Date(value.datetime),
      value: Number.parseFloat(value.close),
  }));

  return (
    <View>
      <Text>Graph</Text>

      <LineGraph
        style={{ width: "100%", height: 300 }}
        points={graphPoints}
        animated={false} color={Colors.light.tint}
      />

    </View>

  )
}

export default Graph