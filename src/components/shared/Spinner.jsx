import spinner from '../assets/spinner.gif';

function Spinner() {
  return <img src={spinner} alt='Loading...' style={{
    width: '25px',
    margin: 'auto',
    display: 'block'
  }}></img>;
}

export default Spinner;
