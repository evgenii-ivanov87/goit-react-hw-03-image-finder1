import s from '/ImageGallery/ImageGallery.module.css'

const ImageGallery = ({Children}) => {
    return (<ul className={s.ImageGallery}>
        {Children}
</ul>)
}

export default ImageGallery