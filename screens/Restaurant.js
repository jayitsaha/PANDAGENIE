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

export default Restaurant;
