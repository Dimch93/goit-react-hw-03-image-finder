import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchSpan,
} from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    searchName: '',
    inputValue: '',
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchName.value.trim();
    this.props.onSubmit(searchQuery);
    this.reset();
  };

  reset = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton>
            <BsSearch />
            <SearchSpan>Search</SearchSpan>
          </SearchButton>
          <SearchInput
            name="searchName"
            type="text"
            id="search"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </header>
    );
  }
}
