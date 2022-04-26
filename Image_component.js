import React from 'react';
import { Image, View } from 'react-native';


/* requiring an image is faster to load then just addressing it */
const image = require('./react-native.jpg');

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Image 
      style={{width: 100, height: 100}}
      source={image}
    />
  </View>
);

export default App;
