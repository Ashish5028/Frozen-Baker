import React, { useState, useEffect } from "react";

const ViewDetails = ({ _id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/get/image/${_id}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(data);
    fetchData();
  }, [_id]); // This ensures the effect runs whenever the 'id' prop changes

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa
      enim sint ut animi quis eveniet accusantium, mollitia pariatur. Recusandae
      quam itaque blanditiis excepturi, delectus nostrum asperiores aspernatur
      nobis. Molestias.
    </div>
  );
};

export { ViewDetails };
