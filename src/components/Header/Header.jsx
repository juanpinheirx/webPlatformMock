import { NavBars } from './subComponentsHeader/NavBars';
import imgLogoEscura from '../../assets/logo-escura.svg';
import './Header.css';

export const Header = () => {
  return (
    <div id='header'>
      <div id='prev-head'>
        <img id='img-logo' src={imgLogoEscura} />
        <NavBars />
      </div>
    </div>
  );
};
