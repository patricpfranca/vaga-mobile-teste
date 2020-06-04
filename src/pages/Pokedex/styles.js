import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from '~/config/pixel';

export default StyleSheet.create({
  containerTitle: {
    marginTop: heightPercentageToDP('12.8%'),
  },
  title: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
  },
  contentFlat: {
    marginTop: heightPercentageToDP('7%'),
    height: '75%',
  },
});
