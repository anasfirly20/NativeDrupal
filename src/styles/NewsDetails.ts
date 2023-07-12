import {StyleSheet} from 'react-native';

export const newsDetailsStyle = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 18,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontWeight: '600',
    fontSize: 35,
  },
  authorContainer: {
    marginTop: 20,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  author: {
    fontWeight: '600',
    fontSize: 25,
  },
  dateCreated: {
    fontSize: 16,
    fontWeight: '600',
    color: 'gray',
  },
  imgContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    shadowOffset: {width: 2, height: 3},
    shadowColor: '#171717',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 10,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  descContainer: {
    marginTop: 40,
  },
  descText: {
    fontSize: 18,
  },
});
