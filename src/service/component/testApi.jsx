import { useState, useEffect } from "react";
import Card from "../../component/card";
const TestApi = () => {
  const [photos, setPhotos] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3001/api/get/image")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setPhotos(data);
  //     });
  // }, []);
  return (
    <div>
      {/* {photos.map((photo) => (
        <div className="float-left h-64 w-72 m-3 bg-cardColor rounded-md  transition ease-out delay-150 hover:duration-500  hover:shadow-xl hover:-translate-y-2 hover:bg-cardbgColor">
          <img src={photo.imageUrl} className="w-72 h-52" />
          <p>{photo.price}</p>
          <p>{photo.name}</p>
        </div>
      ))} */}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
        exercitationem culpa debitis eligendi aliquid consectetur, numquam et
        temporibus! Aspernatur nostrum non soluta consectetur unde enim placeat
        in officia nemo hic?
      </p>
    </div>
  );
};
export default TestApi;
