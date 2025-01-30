import { useState, useEffect } from 'react';
import { ImageContext } from './ImageContext';

const ImageContextProvider = ({ children }) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {

        fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${searchTerm}&image_type=photo&page=${page}&per_page=20`)
            .then(res => res.json())
            .then(data => {
                setImages(prevImages => {
                    const newImages = page === 1 ? data.hits : [...prevImages, ...data.hits];
                    const uniqueImages = newImages.filter((image, index, self) =>
                        index === self.findIndex((img) => img.id === image.id)
                    );
                    return uniqueImages;
                });
            })
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false))
    }, [searchTerm, page]);

    useEffect(() => {
        setImages([]);
        setPage(1);
    }, [searchTerm])

    const value = { images, setImages, isLoading, setIsLoading, error, setError, searchTerm, setSearchTerm, page, setPage };
    return (
        <ImageContext.Provider value={value}>
            <div>{children}</div>
        </ImageContext.Provider>
    );
}

export default ImageContextProvider;