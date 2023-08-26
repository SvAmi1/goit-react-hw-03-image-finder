import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    images: [],
  };

  changeQuery = newQuery => {
    this.setState({
      query: newQuery,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.changeQuery(evt.target.elements.query.value);
    evt.target.reset();
  };

  setImages = () => {};

render () {

  return (
    <div>
      <SearchBar onSubmit={this.handleSubmit}/>

      <ImageGallery>ImageGallery</ImageGallery>

      <div>LoadMore</div>
    </div>
  );
}
};
