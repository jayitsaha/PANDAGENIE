import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

import {icons, COLORS, SIZES, FONTS} from '../constants';

const Restaurant = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HI</Text>
      {/* {renderHeader()} */}
      {/* {renderFoodInfo()} */}
      {/* {renderOrder()} */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  dotsRootContainer: {
    height: 30,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.padding,
  },
  dot: {
    borderRadius: SIZES.radius,
    marginHorizontal: 6,
  },
});
export default Restaurant;
