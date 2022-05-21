import {
  FlatList,
  TouchableOpacity,
  RefreshControl,
  View,
  Modal,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import Component from '../../components';
import {generateStatus} from '../../utils/utils';
import Editor from '../../components/editor';
import useFetchTransaction from '../../hooks/transactions/useFetchTransaction';
import styles from './style';

const Transaction = ({navigation}) => {
  const {data, handleSearch, search, onRefresh, refreshing, handleSort, sort} =
    useFetchTransaction();

  const [showSort, setShowSort] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSort}
        onRequestClose={() => {
          setShowSort(!showSort);
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setShowSort(!showSort)}
          style={styles.modalWrapper}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalSelector}
              onPress={() => {
                setShowSort(!showSort);
                handleSort('sort');
              }}>
              <Editor.RadioButton isActive={sort === 'sort'} />
              <Text style={styles.normalText}>URUTKAN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalSelector}
              onPress={() => {
                setShowSort(!showSort);
                handleSort('byA');
              }}>
              <Editor.RadioButton isActive={sort === 'byA'} />
              <Text style={styles.normalText}>Nama A-Z</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalSelector}
              onPress={() => {
                setShowSort(!showSort);
                handleSort('byZ');
              }}>
              <Editor.RadioButton isActive={sort === 'byZ'} />
              <Text style={styles.normalText}>Nama Z-A</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalSelector}
              onPress={() => {
                setShowSort(!showSort);
                handleSort('lates');
              }}>
              <Editor.RadioButton isActive={sort === 'lates'} />
              <Text style={styles.normalText}>Tanggal Terbaru</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalSelector}
              onPress={() => {
                setShowSort(!showSort);
                handleSort('oldest');
              }}>
              <Editor.RadioButton isActive={sort === 'oldest'} />
              <Text style={styles.normalText}>Tanggal Terlama</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      <FlatList
        ListHeaderComponent={() => (
          <Editor.SearchTextInput
            setSearch={value => {
              handleSearch(value);
            }}
            search={search}
            onSort={() => setShowSort(true)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.toCenter}>
            <Text>Data Tidak Ditemukan</Text>
          </View>
        )}
        data={data}
        refreshControl={
          // refresh data when pull
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({item, index}) => (
          // Component Logic
          <GenerateComponent
            navigation={navigation}
            item={item}
            key={index}
            status={generateStatus(item.status)}
          />
        )}
      />
    </View>
  );
};

const GenerateComponent = ({navigation, item}) => {
  if (item.status === 'SUCCESS') {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {data: item})}>
        <Component.Card.CardSuccess
          item={item}
          status={generateStatus(item.status)}
        />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', {data: item})}>
      <Component.Card.CardPending
        item={item}
        status={generateStatus(item.status)}
      />
    </TouchableOpacity>
  );
};

export default Transaction;
