import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '~/config/pixel';

export default StyleSheet.create({
  img: {
    width: widthPercentageToDP('50%'),
    height: heightPercentageToDP('25%'),
    position: 'absolute',
    marginTop: heightPercentageToDP('15.6%'),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  contentImg: {
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#fff',
    marginTop: heightPercentageToDP('35%'),
    paddingTop: heightPercentageToDP('5.8%'),
    borderTopLeftRadius: heightPercentageToDP('2.35%'),
    borderTopRightRadius: heightPercentageToDP('2.35%'),
  },
  title: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: 22,
  },
  boxSize: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: heightPercentageToDP('3.1%'),
    marginTop: heightPercentageToDP('3.1%'),
  },
  boxItem: {
    alignItems: 'center',
    marginBottom: heightPercentageToDP('1.6%'),
  },
  boxText: {
    fontWeight: 'bold',
  },
  boxTextType: {
    textTransform: 'uppercase',
  },
  contentType: {
    marginTop: heightPercentageToDP('3.1%'),
    marginBottom: heightPercentageToDP('3.1%'),
  },
  titleType: {
    textAlign: 'center',
    marginBottom: heightPercentageToDP('1.6%'),
  },
  contentChips: {
    marginHorizontal: widthPercentageToDP('5.5%'),
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chip: {
    alignSelf: 'stretch',
    width: '40%',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    margin: heightPercentageToDP('0.5%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  chipText: {
    color: '#000',
    textTransform: 'capitalize',
  },
  contentChart: {
    flexDirection: 'row',
    height: heightPercentageToDP('33%'),
    paddingVertical: heightPercentageToDP('1%'),
  },
  barChart: {
    flex: 1,
    marginLeft: widthPercentageToDP('2.8%'),
    marginRight: widthPercentageToDP('2.8%'),
  },
  barChartInset: {
    top: 0,
    bottom: heightPercentageToDP('3.1%'),
  },
});
