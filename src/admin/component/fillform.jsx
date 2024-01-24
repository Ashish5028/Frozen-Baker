// import { DemoPage } from "../../product/components/demo";
// import cakekaphoto from "../../assets/cakeskaphoto.jpg";
// import { useState } from "react";

// // import Slider from "react-slick";
// // export default function SimpleSlider() {
// //   var settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 2000,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 1000,
// //     cssEase: "linear",
// //   };
// // }

// export function FillFom() {
//   const [value, Setvalue] = useState({
//     name: "",
//     price: "",
//     message: "",
//   });
//   const { name, price, message } = value;
//   const handleChange = (e) => {
//     Setvalue({ ...value, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await fetch("http://localhost:3007/api/upload/image", {
//         method: "POST",
//         mode: "cors",
//         body: JSON.stringify({ data: base64EncodedImage }),
//         headers: { "Content-type": "application/json" },
//       });
//     } catch (error) {
//       console.log(error);
//     }

//     // Add your form submission logic here
//     console.log("Form submitted:", value);
//     // You can send the form data to your server or perform other actions
//   };
//   return (
//     <>
//       <div className="flex  container">
//         <div class="bg-white p-8 rounded shadow-md w-96">
//           <form onSubmit={handleSubmit}>
//             <div class="mb-4">
//               <label
//                 for="name"
//                 class="block text-gray-600 text-sm font-medium mb-2"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                 value={name}
//                 onChange={handleChange}
//               />
//             </div>

//             <div class="mb-4">
//               <label
//                 for="price"
//                 class="block text-gray-600 text-sm font-medium mb-2"
//               >
//                 Price
//               </label>
//               <input
//                 type="phone"
//                 id="price"
//                 name="price"
//                 value={price}
//                 onChange={handleChange}
//                 class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div class="mb-4">
//               <label
//                 for="email"
//                 class="block text-gray-600 text-sm font-medium mb-2"
//               >
//                 Image
//               </label>
//               <DemoPage />
//             </div>
//             <div class="mb-6">
//               <label
//                 for="message"
//                 class="block text-gray-600 text-sm font-medium mb-2"
//               >
//                 About
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={message}
//                 onChange={handleChange}
//                 rows="4"
//                 class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
//             >
//               Add +
//             </button>
//           </form>
//         </div>

//         <div className=" overflow-hidden ">
//           <div>
//             <img src={cakekaphoto} alt="image" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
