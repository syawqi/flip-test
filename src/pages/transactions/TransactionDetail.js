import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {
  generateBankName,
  rupiahFormatter,
  toReadableDate,
} from '../../utils/utils';

const TransactionDetail = ({route, navigation}) => {
  const {data} = route.params;
  return (
    <View style={styles.body}>
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>ID Transaksi:#{data.id}</Text>
        <Image
          style={styles.arrow}
          source={require('../../assets/icons/copy.png')}
        />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.headerTextFlex1}>DETAIL TRANSAKSI</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerTextOrange}>Tutup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperWithouBorder}>
        <Text style={styles.headerText} adjustsFontSizeToFit allowFontScaling>
          {generateBankName(data.sender_bank)}
        </Text>
        <Image
          style={styles.arrow}
          source={require('../../assets/icons/arrow-right.png')}
        />
        <Text style={styles.headerText}>
          {generateBankName(data.beneficiary_bank)}
        </Text>
      </View>
      <View style={styles.wrapperWithouBorder}>
        <View style={styles.flex}>
          <Text style={styles.headerText} adjustsFontSizeToFit allowFontScaling>
            {data.beneficiary_name}
          </Text>
          <Text style={styles.normalText}>{data.account_number}</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.headerText} adjustsFontSizeToFit allowFontScaling>
            Nominal
          </Text>
          <Text style={styles.normalText}>{rupiahFormatter(data.amount)}</Text>
        </View>
      </View>
      <View style={styles.wrapperWithouBorder}>
        <View style={styles.flex}>
          <Text style={styles.headerText} adjustsFontSizeToFit allowFontScaling>
            BERITA TRANSFER
          </Text>
          <Text style={styles.normalText}>{data.remark}</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.headerText} adjustsFontSizeToFit allowFontScaling>
            KODE UNIK
          </Text>
          <Text style={styles.normalText}>
            {rupiahFormatter(data.unique_code)}
          </Text>
        </View>
      </View>
      <View style={styles.wrapperWithouBorder}>
        <View style={styles.flex}>
          <Text style={styles.headerText} adjustsFontSizeToFit allowFontScaling>
            WAKTU DIBUAT
          </Text>
          <Text style={styles.normalText}>
            {toReadableDate(data.created_at)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionDetail;
