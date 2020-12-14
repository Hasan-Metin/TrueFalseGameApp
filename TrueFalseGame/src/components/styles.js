import {StyleSheet, Dimensions, Platform} from 'react-native';

export const categoryModalStyles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
    paddingHorizontal: 10,
  },
  container: {
    height: Dimensions.get('window').height * 0.8,
    paddingTop: 5,
    backgroundColor: '#1976d2',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryItemContainer: {
    width: Dimensions.get('window').width * 0.9,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255, 0.3)',
    backgroundColor: '#f2f2f2',
    margin: 7,
    borderRadius: 10,
    flex: 1,
  },
  categoryItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const timerModalStyles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    position: 'absolute',
    bottom: 250,
    width: 300,
    height: 300,
    borderRadius: 20,
  },
});

export const questionItem = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#3949ab',
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  questionContainer: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#ffca28',
    margin: 10,
    padding: 20,
  },
  questionText: {
    color: 'white',
    fontSize: 30,
    fontFamily: Platform.OS === 'ios' ? 'Ubuntu' : 'Ubuntu-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-evenly',
  },
  trueButton: {
    backgroundColor: '#689f38',
    padding: 20,
    borderRadius: 10,
  },
  falseButton: {
    backgroundColor: '#d32f2f',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'Pacifico' : 'Pacifico-Regular',
  },
});
