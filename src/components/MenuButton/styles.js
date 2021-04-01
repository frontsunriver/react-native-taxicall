import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22
  },
  btnIcon: {
    height: 25,
    width: 25
  },
  btnText: {
    fontSize: 16,
    marginLeft: 40,
    color: '#777',
    marginTop: 2
  }
});

export default styles;
