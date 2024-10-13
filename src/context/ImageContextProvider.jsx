import { useState, useEffect } from 'react';
import { ImageContext } from './ImageContext';

const ImageContextProvider = ({ children }) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const value = { images, setImages, isLoading, setIsLoading, error, setError, searchTerm, setSearchTerm };


    useEffect(() => {

        fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${searchTerm}&image_type=photo`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits);
            })
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false))
    }, [searchTerm]);

    return (
        <ImageContext.Provider value={value}>
            <div>{children}</div>
        </ImageContext.Provider>
    );
}

export default ImageContextProvider;