import backgroundImage from '../imgs/12052503_1174776899198981_2983491387424920150_o.jpg';

//https://github.com/facebookincubator/create-react-app/issues/585

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundBlendMode: 'multiply'
  },
  centered: {
    textAlign: 'center'
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
