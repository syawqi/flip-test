import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: '#EDEDED',
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
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  headerTextFlex1: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
  },
  headerTextOrange: {
    color: '#EF684A',
    fontWeight: 'bold',
    fontSize: 14,
  },
  normalText: {
    color: '#000',
    fontSize: 14,
  },
  modalWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(13, 17, 23, 0.2)',
  },
  modalContainer: {
    borderRadius: 8,
    backgroundColor: '#fff',
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
