import React from "react";
import Style from './style.css';
import { useContext } from "react";
import {ItensContext} from '../../context';

export function Main() {
    const  {images, selectedImages, setSelectedImages} = useContext (ItensContext)
    return (
        <main>
            <section className="home_container">
                <div className="left-side">
                    <div className="title">
                        { selectedImages &&   <h2> {selectedImages.title} </h2>}
                            <a className="btn" href="https://www.corebiz.ag/pt/" target="blank" aria-label="veja mais">Veja mais<img src="./images/arrow-circle.svg" alt="Button" />
                            </a>
                    </div>
                    <div className="home_images">
                    {images.map ((img, id ) => {
                        return ( 
                            <img
                            style= { { border:selectedImages === img? "4px solid white": "" }}
                            className="Icon_Image" 
                            src= {img.thumbnailUrl} 
                            alt="Placeholder" 
                            key= {id}
                            onClick= {() => setSelectedImages (img)} 
                            />
                        )
                    } ) }
                    </div>
                </div>
                <div className="banner">
                    {selectedImages && <img className="image-banner" src= {selectedImages.url } />} 
                </div>
            </section>
        </main>
    );
}

export default Main;