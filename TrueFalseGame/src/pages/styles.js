import {Dimensions, StyleSheet, Platform} from 'react-native';

export const introPageStyles = StyleSheet.create({
  safe: {flex: 1},
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3449ab',
  },
  bannerText: {
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Indie Flower' : 'IndieFlower-Regular',
  },
  buttonContainer: {
    backgroundColor: '#fb8c00',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Ubuntu' : 'Ubuntu-Regular',
  },
});

export const finishPage = StyleSheet.create({
  safe: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#3949ab',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 100,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Indie Flower' : 'IndieFlower-Regular',
  },
});
export const questionsPage = StyleSheet.create({
  safe: {flex: 1},
});
