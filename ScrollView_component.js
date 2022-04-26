import React from 'react';
import { Text, View, ScrollView } from 'react-native';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Text style={{ fontSize: 24, textAlign: 'center' }}>
      Scroll me!
    </Text>
    <View style={{ height: 400, backgroundColor: '#e5e5e5' }}>
      {/* This makes the content be sliding */}
    <ScrollView horizontal>
      <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
      <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
      <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
    </ScrollView>
    </View>
  </View>
);

export default App;
