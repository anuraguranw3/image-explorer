import { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';
import ImageCards from './ImageCards';
import Loader from './Loader';

const Images = () => {

  const { isLoading, images } = useContext(ImageContext);

  return (
    <>
      {
        !isLoading && images.length === 0 ? (<h1 className="text-2xl m-5">No Images Found</h1>)
          : isLoading ? (<Loader items={10} />)
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
    </>
  );
}

export default Images;
{/* <div className="w-3/4 columns-3 gap-0 m-2 p-4 md:columns-2 sm:columns-1"></div> */}