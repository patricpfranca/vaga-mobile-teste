import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  img: {
    width: 180,
    height: 180,
    position: 'absolute',
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  contentImg: {
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#fff',
    marginTop: 240,
    paddingTop: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: 22,
  },
  boxSize: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 20,
  },
  boxItem: {
    alignItems: 'center',
    marginBottom: 10,
  },
  boxText: {
    fontWeight: 'bold',
  },
  boxTextType: {
    textTransform: 'uppercase',
  },
  contentType: {
    marginTop: 20,
  },
  titleType: {
    textAlign: 'center',
    marginBottom: 10,
  },
  contentChips: {
    marginHorizontal: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chip: {
    alignSelf: 'stretch',
    width: '40%',
    alignItems: 'center',
    borderWidth: 1,
    margin: 5,
  },
  chipText: {
    color: '#000',
    textTransform: 'capitalize',
  },
});
