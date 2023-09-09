import { ImageGallerytItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImgList } from "./ImageGallery.styled";


export const ImageGallery = ({ images }) => {
  return (
    <ImgList>
      {images.map(image => (
        <li
          key={image.id}
        >
        <ImageGallerytItem 
        web={image.webformatURL}
        largeImage={image.largeImageURL}
        description={image.tags}
        />
        </li>
      ))}
    </ImgList>
  );
};
