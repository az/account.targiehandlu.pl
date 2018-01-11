


import backgroundImage from '../../imgs/bg1.jpg';

//https://github.com/facebookincubator/create-react-app/issues/585



const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage : `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundBlendMode : 'luminosity'
  },
  secondary: {
    marginTop: 10
  },
  card: {
    minWidth: 500,
    padding: '1em'
  },
  avatar: {
    margin: '2em',
    textAlign: 'center '
  },
  form: {
    padding: '0 1em 1em 1em',
    minWidth: 500
  },
  input: {
    display: 'flex'
  },
  hint: {
    textAlign: 'center',
    marginTop: '1em',
    color: '#ccc'
  }
};

export default styles;
