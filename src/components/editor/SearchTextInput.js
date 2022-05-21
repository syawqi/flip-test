import {View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

const SearchTextInput = ({setSearch, search, onSort}) => {
  const [text, setText] = useState(search);

  return (
    <View style={styles.row}>
      <Image
        style={styles.search}
        source={require('../../assets/icons/search.png')}
      />
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={value => setText(value)}
        onEndEditing={() => setSearch(text)}
        onSubmitEditing={() => setSearch(text)}
        placeholder="Search"
        autoCapitalize="sentences"
        // value={text}
      />
      <TouchableOpacity style={styles.row} onPress={() => onSort()}>
        <Text style={styles.headerTextOrange}>URUTKAN</Text>
        <Image
          style={styles.arrow}
          source={require('../../assets/icons/arrow-down.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchTextInput;
