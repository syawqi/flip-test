import {StyleSheet} from 'react-native';

import colors from '../../configs/colors';

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.white,
    marginVertical: 10,
  },
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: colors.divider,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperWithouBorder: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  arrow: {
    height: 16,
    width: 16,
    marginHorizontal: 4,
  },
  headerText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 14,
  },
  headerTextFlex1: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
  },
  headerTextOrange: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 14,
  },
  normalText: {
    color: colors.black,
    fontSize: 14,
  },
  modalWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.modalBackground,
  },
  modalContainer: {
    borderRadius: 8,
    backgroundColor: colors.white,
    padding: 30,
  },
  modalSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  toCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default styles;
