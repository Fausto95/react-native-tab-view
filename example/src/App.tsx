import * as React from 'react';

import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { TabView } from 'react-native-tab-view';

const routes = [
  { key: 'first', title: 'First' },
  { key: 'second', title: 'Second' },
  { key: 'third', title: 'Third' },
  { key: 'fourth', title: 'Fourth' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TabView
        tabBarStyle={styles.tabBarStyle}
        tabBarContentContainerStyle={styles.tabBarContentContainerStyle}
        style={{ flex: 1 }}
        routes={routes}
        onPress={(index) => console.log(index)}
        renderTabBar={({ route, isActive }) => (
          <View
            style={[styles.tab, isActive ? { backgroundColor: 'purple' } : {}]}
          >
            <Text style={[{ color: isActive ? 'white' : 'black' }]}>
              {route.title}
            </Text>
          </View>
        )}
        renderScene={(route) => (
          <View style={styles.scene}>
            <Text style={styles.text}>{route.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarStyle: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabBarContentContainerStyle: {
    paddingHorizontal: 20,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  tab: {
    borderRadius: 30,
    padding: 10,
  },
  activeTab: {
    backgroundColor: 'black',
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
