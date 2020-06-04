import { StyleSheet } from 'react-native';

import { widthPercentageToDP, heightPercentageToDP } from '~/config/pixel';

export default StyleSheet.create({
  title: {
    marginTop: heightPercentageToDP('18.4%'),
    color: '#000',
    fontSize: 26,
    fontWeight: 'bold',
  },
  inputSearch: {
    marginTop: heightPercentageToDP('6.7%'),
  },
  contentButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: heightPercentageToDP('6.7%'),
  },
  buttons: {
    padding: heightPercentageToDP('2%'),
    width: '48%',
    margin: 1,
  },
});
