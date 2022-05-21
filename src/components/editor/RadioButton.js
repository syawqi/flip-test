import {View} from 'react-native';
import React from 'react';
import styles from './style';

const RadioButton = ({isActive}) => {
  return (
    <View style={styles.radioButton}>
      {isActive ? <View style={styles.innerRadioButton} /> : null}
    </View>
  );
};

export default RadioButton;
