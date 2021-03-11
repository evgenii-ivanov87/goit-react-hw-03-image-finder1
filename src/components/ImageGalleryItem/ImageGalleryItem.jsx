import React from 'react';
import s from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ items }) => {
        
    return (
        <>
            {items.map((item) => (<li className={s.ImageGalleryItem} key={item.id}>
            <img className={s.ImageGalleryItemIimage} src={item.largeImageURL} alt={item.tage} />
            </li>))}
        </>    
    )
    
        
                       
                
                    
        
    
    
    
}
export default ImageGalleryItem