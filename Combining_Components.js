import React from 'react';
import { View, Text } from 'react-native';

/* the main component*/ 
const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>
    <Box color="red" />
    <Box color="green" />
    <Box color="blue" />
  </View>
);

export default App;

/* a component that creates a colored box */ 
export const Box = props => (
  // Move a box `View` component here
  <View style={{ width: 100, height: 100, backgroundColor: props.color }} />
);
