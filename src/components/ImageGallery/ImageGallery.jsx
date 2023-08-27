import { ImageGallerytItem } from "components/ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({ images, onDelete }) => {
  return (
    <ul>
      {images.map(image => (
        <li
          key={image.id}
        >
        <ImageGallerytItem info={image} onDelete={onDelete}/>
        </li>
      ))}
    </ul>
  );
};
