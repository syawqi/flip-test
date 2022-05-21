import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import CardDefault from './CardDefault';

const CardPending = ({item, status, divider, label}) => {
  return (
    <CardDefault
      item={item}
      status={status}
      divider={<View style={styles.dividerPending} />}
      label={
        <View style={styles.label}>
          <View style={[styles.labelPendingBackground]}>
            <Text style={styles.defaultColor}>{status}</Text>
          </View>
        </View>
      }
    />
  );
};

export default CardPending;
