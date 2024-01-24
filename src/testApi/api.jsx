// import { useState, useEffect } from "react";
// const TestApi = () => {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3001/api/get/image")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setPhotos(data);
//       });
//   }, []);
//   return (
//     <div>
//       {photos.map((photo) => (
//         <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
//       ))}
//     </div>
//   );
// };
// export default TestApi;
