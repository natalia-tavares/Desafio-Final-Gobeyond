import React from "react";
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
export const ItensContext = createContext({});
function ImagesProvider({ children }) {
    const [images, setImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState(undefined);
    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/allissonneo/APIextends-Placeholder/Images?_limit=4')
            .then(response => {
            setImages(response.data);
            setSelectedImages(response.data[0]);
        });
    }, []);
    return (React.createElement(ItensContext.Provider, { value: { images, selectedImages, setSelectedImages } }, children));
}

export default ImagesProvider;