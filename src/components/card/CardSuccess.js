import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import CardDefault from './CardDefault';

const CardSuccess = ({item, status, divider, label}) => {
  return (
    <CardDefault
      item={item}
      status={status}
      divider={<View style={styles.dividerSuccess} />}
      label={
        <View style={styles.label}>
          <View style={[styles.labelSuccessBackground]}>
            <Text style={styles.whiteFont}>{status}</Text>
          </View>
        </View>
      }
    />
  );
};

export default CardSuccess;
