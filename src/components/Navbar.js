import logo from '../assets/logo.png';
import '../styles/components/Navbar.scss';

function Navbar() {
  return (
    <div className='navbar nav-shadow'>
      <img src={logo} className="app-logo" alt="logo"/>
      <h5>Ehtomit</h5>
      <button type="button">Menu</button>
    </div>
  );
}

export default Navbar;
