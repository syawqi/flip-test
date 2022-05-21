import {StyleSheet} from 'react-native';

import colors from '../../configs/colors';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    color: colors.black,
  },
  headerTextOrange: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 14,
  },
  body: {
    flexDirection: 'row',
    margin: 10,
    borderRadius: 7,
    backgroundColor: colors.white,
  },
  content: {
    margin: 15,
    flex: 1,
  },
  arrow: {
    height: 8,
    width: 16,
    marginHorizontal: 4,
  },
  search: {
    height: 20,
    width: 20,
    marginHorizontal: 4,
  },
  innerRadioButton: {
    width: 8,
    backgroundColor: colors.orange,
    height: 8,
    borderRadius: 20,
  },
  radioButton: {
    width: 15,
    borderColor: colors.orange,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 15,
  },
});

export default styles;
