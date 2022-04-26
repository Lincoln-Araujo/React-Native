import React from 'react';
import { View } from 'react-native';

const App = () => (
  // Replace `null` with the `View` component
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{
      width: 100,
      height: 100,
      backgroundColor: 'red',
    }}>
    </View>
    <View style={{
      width: 100,
      height: 100,
      backgroundColor: 'blue',
    }}>
    </View>
  </View>
 
);

export default App;
