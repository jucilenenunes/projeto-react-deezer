import { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledSearchBar } from './styles'
import searchService from '../../services/search.service'

function SearchBar() {
  const termState = useSelector((state) => state.term);
  const [term, setTerm] = useState(termState);
  
  const search = () => {
    if (term && term.length >= 3) {
      searchService(term);
    }
    else {
      alert('Exibir mensagem: Para realizar a busca o termo digitado deve conter no mínimo 3 letras.');
    }
    document.getElementById('term-input').focus();
  }

  const onSearch = () => { 
    search()
  }

  const onKeyDown = (evt) => {
    if (evt.key === 'Enter') {
      search();
    }
  }
  return (
    <StyledSearchBar>
      <div><input id='term-input' type='text' value={termState} onChange={(evt) => { setTerm(evt.target.value); }} onKeyDown={onKeyDown} /></div>
      <div><button onClick={onSearch}>BUSCAR</button></div>
    </StyledSearchBar>
  );
}

export default SearchBar;
