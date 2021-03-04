import s from '../ImageGalleryItem/ImageGalleryItem.module'


const ImageGalleryItem = ({url,tittel}) => {
    <li className={s.ImageGalleryItem}>
        <img src={url} alt={tittel} className={s.ImageGalleryItem-image} />
</li>}

export default ImageGalleryItem