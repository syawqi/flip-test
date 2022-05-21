import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';
import {
  generateBankName,
  rupiahFormatter,
  toReadableDate,
} from '../../utils/utils';

const CardDefault = ({item, status, divider, label}) => {
  return (
    <View style={styles.body}>
      {divider}
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.headerText} adjustsFontSizeToFit allowFontScaling>
            {generateBankName(item.sender_bank)}
          </Text>
          <Image
            style={styles.arrow}
            source={require('../../assets/icons/arrow-right.png')}
          />
          <Text style={styles.headerText}>
            {generateBankName(item.beneficiary_bank)}
          </Text>
        </View>

        <Text style={styles.normalText} adjustsFontSizeToFit allowFontScaling>
          {item.beneficiary_name.toUpperCase()}
        </Text>
        <View style={styles.row}>
          <Text style={styles.normalText} adjustsFontSizeToFit allowFontScaling>
            {rupiahFormatter(item.amount)}
          </Text>
          <View style={styles.dot} />
          <Text style={styles.normalText} adjustsFontSizeToFit allowFontScaling>
            {toReadableDate(item.created_at)}
          </Text>
        </View>
      </View>
      {label}
    </View>
  );
};

export default CardDefault;
