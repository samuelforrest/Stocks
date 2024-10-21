import { View, Text } from './Themed';
import React from 'react';
import { LineGraph, GraphPoint } from "react-native-graph";
import Colors from '../constants/Colors';
import timeseries from "@/assets/data/timeseries.json"

const Graph = () => {
  
  const points: GraphPoint[] = [
    {
      date: new Date(2024, 1, 1),
      value: 10,
    },
    {
      date: new Date(2024, 1, 2),
      value: 15,
    },
    {
      date: new Date(2024, 1, 3),
      value: 5,
    }
  ];

  const graphPoints: GraphPoint[] = timeseries.values.map((value) => 
    ({date: new Date(value.datetime),
      value: Number.parseFloat(value.close),
  }));

  console.log(JSON.stringify(graphPoints, null, 2));

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