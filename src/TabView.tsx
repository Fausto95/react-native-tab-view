import React from 'react';
import { View } from 'react-native';
import { TabBar } from './TabBar';
import type { StyleProp, ViewStyle } from 'react-native';
import type { Route, RenderTabBar, RenderScene } from './types';

type Props = {
  routes: Route[];
  onPress: (index: number) => void;
  renderTabBar: RenderTabBar;
  renderScene: RenderScene;
  style?: StyleProp<ViewStyle>;
  tabBarStyle?: StyleProp<ViewStyle>;
  tabBarContentContainerStyle?: StyleProp<ViewStyle>;
};

export function TabView({
  routes,
  onPress,
  renderTabBar,
  renderScene,
  style,
  tabBarStyle,
  tabBarContentContainerStyle,
}: Props) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onTabPress = React.useCallback(
    (index: number) => {
      setCurrentIndex(index);
      onPress(index);
    },
    [onPress]
  );

  return (
    <View style={[style]}>
      <TabBar
        routes={routes}
        currentIndex={currentIndex}
        onPress={onTabPress}
        render={renderTabBar}
        contentConatinerStyle={tabBarContentContainerStyle}
        style={tabBarStyle}
      />
      {renderScene(routes[currentIndex] as Route)}
    </View>
  );
}
