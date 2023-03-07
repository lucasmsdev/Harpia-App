import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a80d9'
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center'
  },

  /*
  logo: {
    width: 170,
    height: 195
  },
  */

  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingBottom: 80
  },

  input: {
    backgroundColor: '#4a80d9',
    width: '90%',
    marginBottom: 5,
    color: '#FFF',
    fontSize: 22,
    padding: 10,
    borderWidth: 2,
    borderRadius:15,
    borderColor: '#FFF',
  },

  buttonSubmit: {
    backgroundColor: '#2e9699',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderColor:'#FFF',
    marginTop: 25, 
    borderWidth: 1,
    borderColor:'#FFF'
  },

  submitText: {
    color: '#FFF',
    fontSize: 19
  },

  buttonRegister: {
    marginTop: 5  
  },

  registerText: {
    color: '#FFF'
  }
});