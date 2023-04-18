import React from 'react';
import { useState, useCallback } from 'react';
import { useWindowDimensions, View, ScrollView, Pressable } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import type { RenderTabBar, Route } from './types';

type Props = {
  routes: Route[];
  currentIndex: number;
  onPress: (index: number) => void;
  render: RenderTabBar;
  contentConatinerStyle?: StyleProp<ViewStyle>;
  style: StyleProp<ViewStyle>;
};

export function TabBar({
  routes,
  currentIndex,
  onPress,
  render,
  contentConatinerStyle,
  style,
}: Props) {
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const { width: containerWidth } = useWindowDimensions();

  const onTabPress = useCallback(
    (index: number) => {
      return () => onPress(index);
    },
    [onPress]
  );

  const onContentSizeChange = useCallback(
    (width: number) => {
      if (containerWidth < width) {
        setIsScrollEnabled(true);
      } else {
        setIsScrollEnabled(false);
      }
    },
    [containerWidth]
  );

  return (
    <View style={[style]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={isScrollEnabled}
        onContentSizeChange={onContentSizeChange}
        contentContainerStyle={contentConatinerStyle}
      >
        {routes.map((route, index) => {
          const isActive = index === currentIndex;

          return (
            <Pressable onPress={onTabPress(index)} key={route.key}>
              {render({ route, isActive })}
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
