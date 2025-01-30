import { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';
import ImageCards from './ImageCards';
import Loader from './Loader';

const Images = () => {

  const { isLoading, setIsLoading, images, searchTerm, page, setPage } = useContext(ImageContext);

  const handleLoadMore = () => {
    // setIsLoading(true);
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {
        !isLoading && images.length === 0 ? (<h1 className="text-2xl m-5">No Images Found</h1>)
          : isLoading ? (<Loader />)
            : (
              <div className="w-[100%] columns-1 gap-0 m-2 p-4 md:columns-2 lg:columns-3">
                {
                  images.map((image) => (
                    <ImageCards image={image} key={image.id} />
                  ))
                }
              </div>
            )
      }

      {!isLoading && images.length > 0 && (
        <div className="text-center my-4">
          <button
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-800"
            onClick={handleLoadMore}
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </>
  );
}

export default Images;
{/* <div className="w-3/4 columns-3 gap-0 m-2 p-4 md:columns-2 sm:columns-1"></div> */ }