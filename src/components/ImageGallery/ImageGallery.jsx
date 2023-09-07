import { ImageGallerytItem } from "components/ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <li
          key={image.id}
        >
        <ImageGallerytItem info={image} />
        </li>
      ))}
    </ul>
  );
};
