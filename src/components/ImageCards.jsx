
const Cards = ({ image }) => {

  const handleImageClick = () => {
    window.open(image.pageURL, "_blank");
  }

  return (
    <div className="relative w-full rounded overflow-hidden p-2" onClick={handleImageClick} >
      <img src={image.webformatURL} alt="img" className="w-full rounded cursor-pointer" />
      {/* webformatURL high quality images */}
      {/* previewURL */}
      <div className="absolute inset-2 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 rounded">
        <span className="absolute top-1 left-2 text-white text-lg font-bold">from Pixabay</span>
        <span className="absolute bottom-2 right-2 text-white text-lg">by - {image.user}</span>
      </div>
    </div>
  );
}

export default Cards;