import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalImg: 0,
    isLoading: false,
  };

  changeQuery = newQuery => {
    this.setState({
      query: '${nanoid(6)}/${newQuery}',
      images: [],
      page: 1,
      totalImg: 0,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const currentQuery = evt.target.elements.query.value.trim();
    if (currentQuery)
    this.changeQuery();
    evt.target.reset();
  };


async  componentDidUpdate(prevProps, prevState) {
const query = this.state.query;
const page = this.state.page;

if (prevState.query !== this.state.query) {
  const newImages = await fetchImages(query, page);
  this.setState(prevState => ({...prevState.query, 
    images: newImages});)
}
  }

render () {
const {images, } = this.state;
  return (
    <div>
      <SearchBar onSubmit={this.handleSubmit}/>

      <ImageGallery images={images}>ImageGallery</ImageGallery>

      <div>LoadMore</div>
    </div>
  );
}
};
