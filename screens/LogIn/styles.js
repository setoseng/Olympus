import { colors } from '../../theme'

export const styles = {
  container: {
    flex: '1',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  input: {
    width: '40%',
    minHeight: 20,
    borderWidth: 1,
    marginBottom: 5,
  },
  title: {
    fontSize: '20px',
    color: 'black',
  },
  loginButton: {
    margin: 10,
    width: 200,
    height: 40,
    borderRadius: '20%',
    minHeight: 20,
    backgroundColor: colors.primary,
  },
  loginButtonText: {
    textColor: colors.secondary,

  },
}