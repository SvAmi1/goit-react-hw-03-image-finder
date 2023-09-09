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

  async  componentDidUpdate(prevProps, prevState) {
    const longQuery = this.state.query;
    const shotQuery = longQuery.slice(7, longQuery.length);
    const imgPage = this.state.page;
    
    if (prevState.query !== longQuery || prevState.page !== imgPage) {
      // const newImages = await fetchImages(shotQuery, imgPage);
      this.setState({  isLoading: true });
      // (prevState => ({...prevState.query, 
      //   images: newImages});)
      setTimeout(async () => {
        try {
          
        }
      })
    }
      }
  onChangeQuery = newQuery => {
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
    if (currentQuery === '') {
      warn();
      return;
    }
    this.onChangeQuery(currentQuery);
    // evt.target.reset();
  };

  onChangePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };



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
