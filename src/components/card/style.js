import {StyleSheet} from 'react-native';
import colors from '../../configs/colors';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
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
  dividerSuccess: {
    backgroundColor: colors.green,
    width: 7,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  dividerPending: {
    backgroundColor: colors.orange,
    width: 7,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 10,
    marginHorizontal: 4,
    backgroundColor: colors.black,
  },
  label: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  labelSuccessBackground: {
    backgroundColor: colors.green,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  labelPendingBackground: {
    borderWidth: 1,
    borderColor: colors.orange,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  whiteFont: {
    color: colors.white,
    fontWeight: 'bold',
  },
  defaultColor: {
    color: colors.black,
    fontWeight: 'bold',
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
  normalText: {
    color: colors.black,
    fontSize: 14,
  },
});

export default styles;
