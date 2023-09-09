import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

import { nanoid } from 'nanoid';
import { fetchImages } from 'services/api';
import { ToastContainer } from 'react-toastify';
import { success, error, warn, info, empty } from 'services/toasts';
import { GlobalStyle, Layout, } from './GlobalStyle';

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
      this.setState({ isLoading: true });
      // this.setState(prevState => ({...prevState.query, 
      //   images: newImages}))
      setTimeout(async () => {
        try {
          const { hits, totalHits } = await fetchImages(shotQuery, imgPage);
          if (totalHits !== 0 && this.state.totalImg === 0) {
            success(totalHits);
          } else if (totalHits === 0) {
            empty();
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            totalImg: totalHits,
          }));

          if (
            prevState.images.length + hits.length === totalHits &&
            this.state.totalImg > 0
          ) {
            info();
          }
        } catch (err) {
          console.info(err);
          error();
        } finally {
          this.setState({ isLoading: false });
        }
      }, 800);
    }
      }
  
  handleSubmit = evt => {
    evt.preventDefault();
    const currentQuery = evt.target.elements.query.value.trim();
    console.log(currentQuery);
    if (currentQuery === '') {
      warn();
      return;
    }
    this.onChangeQuery(currentQuery);
  };

  onChangeQuery = newQuery => {
    this.setState({
      query: `${nanoid(6)}/${newQuery}`,
      // query: newQuery,
      images: [],
      page: 1,
      totalImg: 0,
    });
  };

  onChangePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };


render () {
const {images, totalImg, isLoading} = this.state;
  return (
    <Layout>
      <SearchBar onSubmit={this.handleSubmit}/>

      <ImageGallery images={images}/>
      {isLoading && <Loader/>}
      {images.lenght === 0 || images.lenght === totalImg ? null : (<Button changePage={this.onChangePage}/>)}
      <ToastContainer/>
      <GlobalStyle/>
    </Layout>
  );
}
};
