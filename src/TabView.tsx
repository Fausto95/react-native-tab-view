import React from 'react';
import { View } from 'react-native';
import { TabBar } from './TabBar';
import type { StyleProp, ViewStyle } from 'react-native';
import type { Route, RenderTabBar, RenderScene } from './types';

type Props = {
  routes: ReadonlyArray<Route>;
  onPress: (index: number) => void;
  renderTabBar: RenderTabBar;
  renderScene: RenderScene;
  style?: StyleProp<ViewStyle>;
  tabBarStyle?: StyleProp<ViewStyle>;
  tabBarContentContainerStyle?: StyleProp<ViewStyle>;
  tabBarOverflowWitdth?: number;
};

export function TabView({
  routes,
  onPress,
  renderTabBar,
  renderScene,
  style,
  tabBarStyle,
  tabBarContentContainerStyle,
  tabBarOverflowWitdth,
}: Props) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onTabPress = React.useCallback(
    (index: number) => {
      setCurrentIndex(index);
      onPress(index);
    },
    [onPress]
  );

  const scene = React.useMemo(() => {
    renderScene(routes[currentIndex] as Route);
  }, [currentIndex, renderScene, routes]);

  return (
    <View style={[style]}>
      <TabBar
        routes={routes}
        currentIndex={currentIndex}
        onPress={onTabPress}
        render={renderTabBar}
        contentContainerStyle={tabBarContentContainerStyle}
        style={tabBarStyle}
        overflowWitdth={tabBarOverflowWitdth}
      />
      {scene}
    </View>
  );
}
