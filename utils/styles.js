import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  resultText: {
    fontSize: 35,
    color: 'white',
    margin: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  calculationText: {
    fontSize: 30,
    color: 'white',
    margin: 10,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  calculation: {
    paddingTop: 10,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#221f29',
  },
  result: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#221f29',
  },
  buttons: {
    flex: 8,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    backgroundColor: 'orange',
    fontSize: 35,
    width: 50,
    height: 50,
    borderRadius: 100,
    textAlign: 'center',
    paddingTop: 2,
  },
  btnText0: {
    width: 130,
    height: 50,
    borderRadius: 100,
  },
});

export default styles;
