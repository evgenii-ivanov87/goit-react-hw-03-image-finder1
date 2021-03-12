import React from 'react';
import s from './ImageGalleryItem.module.css';

function handlerClick(e) { console.log(e
    ) };

const ImageGalleryItem = ({ items }) => {
        
    return (
        <>
            {items.map((item) => (<li className={s.ImageGalleryItem} key={item.id} onClick={handlerClick}>
                <img className={s.ImageGalleryItemIimage} src={item.webformatURL} alt={item.tage} />
            </li>))}
        </>    
    )
    
        
                       
                
                    
        
    
    
    
}
export default ImageGalleryItem