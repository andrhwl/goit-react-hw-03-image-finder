import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { Component } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarContainer,
} from './SearchBar.styled';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  hendleSaveSearch = evt => {
    this.setState({ searchValue: evt.currentTarget.value });
  };

  hendelSubmit = evt => {
    evt.preventDefault();
    const { searchValue } = this.state;

    if (searchValue.trim() === '') {
      toast.error('Oopps, enter at least something');
      return;
    }
    this.props.onSubmit(searchValue);

    this.reset();
  };

  reset() {
    this.setState({ searchValue: '' });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.hendelSubmit}>
          <SearchFormButton type="submit">
            <ImSearch />
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchValue}
            onChange={this.hendleSaveSearch}
          />
        </SearchForm>
      </SearchbarContainer>
    );
  }
}
