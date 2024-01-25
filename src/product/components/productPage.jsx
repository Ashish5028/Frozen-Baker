import { useState, useEffect } from "react";

const ProductPage = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/get/image")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  return (
    <div className="px-10">
      {photos.map((photo) => (
        <div className="float-left h-72 w-72 m-3 bg-cardColor rounded-md  transition ease-out delay-75    hover:bg-cardbgColor">
          <img
            src={photo.imageUrl}
            className="w-72 h-52 hover:ease-in duration-300  "
          />
          <div className="text-center py-4 cursor-pointer">
            <p className="">
              {photo.price}
              <span>$</span>
            </p>
            <p>{photo.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export { ProductPage };
