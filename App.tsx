/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import FeedCard from './components/FeedCard';
import FeedSimulation from './components/FeedSimulation';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
    <StatusBar
    animated={true}
    backgroundColor="#deedfa"
    //barStyle={statusBarStyle}
  />
  <View style={{paddingLeft: 16 , backgroundColor: '#deedfa', paddingBottom: 18}}>
  <View style={{flexDirection: 'row',alignItems: 'center'}}>
<Icon name="arrow-back-outline" size={20} color="black"  />

<Text style={{marginLeft: 4, fontWeight: '500'}}>
  Account feed
</Text>

  </View>
 
    <Text style={{fontWeight: 'bold', fontSize: 36, marginLeft: 8}}>
      Watch list
    </Text>
  </View>
   <FeedSimulation/>
    </>
    
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
