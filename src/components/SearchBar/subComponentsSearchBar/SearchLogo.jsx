import './SearchLogo.css';
import imgLogo from '../../../assets/red-search.svg';

export const SearchLogo = () => {
  return (
    <div id='search-logo'>
      <img src={imgLogo} alt='' />
      <input id='input-bar' type='text' placeholder='Pesquisar eventos' />
    </div>
  );
};
