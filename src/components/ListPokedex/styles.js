import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '~/config/pixel';

export default StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: heightPercentageToDP('1.6%'),
    margin: heightPercentageToDP('0.5%'),
    borderRadius: heightPercentageToDP('1.6%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: widthPercentageToDP('21%'),
    height: heightPercentageToDP('12.6%'),
  },
  id: {
    marginTop: heightPercentageToDP('0.6%'),
    fontWeight: 'bold',
  },
  name: {
    textTransform: 'capitalize',
  },
});
