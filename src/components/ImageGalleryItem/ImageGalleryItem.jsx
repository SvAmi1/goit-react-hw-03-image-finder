import { Component } from 'react';
import { ModalBox } from 'components/Modal/Modal';


export class ImageGallerytItem extends Component {
   state = {
    isModalOpen: false
   };

   openModal = () => {
    this.setState({ isModalOpen: true })
   };

   closeModal = () => {
    this.setState({ isModalOpen: false });
  };

render() {
  const { web, largeImage, description } = this.props;
    return (
      <> 
       <img src={web} alt={description} onClick={this.openModal} />
       <ModalBox bigImg={largeImage} alt={description} onClose={this.closeModal} state={this.state.isModalOpen}/>
       </>
    );
  }
}