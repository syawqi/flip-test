import {StyleSheet} from 'react-native';

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
    backgroundColor: '#ffff',
  },
  content: {
    margin: 15,
    flex: 1,
  },
  dividerSuccess: {
    backgroundColor: '#58B483',
    width: 7,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  dividerPending: {
    backgroundColor: '#F06C39',
    width: 7,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 10,
    marginHorizontal: 4,
    backgroundColor: '#000',
  },

  label: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  labelSuccessBackground: {
    backgroundColor: '#58B483',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  labelPendingBackground: {
    borderWidth: 1,
    borderColor: '#F06C39',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  whiteFont: {
    color: '#ffff',
    fontWeight: 'bold',
  },
  defaultColor: {
    color: '#000',
    fontWeight: 'bold',
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
  normalText: {
    color: '#000',
    fontSize: 14,
  },
});

export default styles;
