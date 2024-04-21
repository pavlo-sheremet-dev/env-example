import { useEffect } from "react";
import { getImages } from "./services/api";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const asyncWrapper = async () => {
      const images = await getImages();
      setImages(images);
    };
    asyncWrapper();
  }, []);

  console.log(images);

  return <div>HELLO WORLD</div>;
}

export default App;
