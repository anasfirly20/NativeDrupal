import {StyleSheet} from 'react-native';

export const newsStyle = StyleSheet.create({
  profileContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileData: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  profileDetails: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
  },
  textHeader: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 35,
    fontWeight: '700',
  },
  contentContainer: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '95%',
    height: 150,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderRadius: 20,
    shadowOffset: {width: 1, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  descContainer: {
    flex: 1,
    gap: 10,
  },
  descTextHeader: {
    color: '#222222',
    fontSize: 20,
    fontWeight: '700',
    paddingRight: 30,
  },
  descText: {
    color: '#767676',
    fontSize: 14,
    fontWeight: '600',
    paddingRight: 30,
  },
  cardImage: {
    flex: 0.5,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
