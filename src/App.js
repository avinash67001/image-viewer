import "./App.css";

import React, { useState } from "react"; //Importing UseState Hook from react library

import { ChevronLeft, ChevronRight } from "lucide-react"; //Importing left and right icons for sliding through the images from lucide react library

// importing images from Images folder
import nature1 from "../src/Images/nature1.jpg";
import nature2 from "../src/Images/nature2.jpg";
import nature3 from "../src/Images/nature3.jpg";
import nature4 from "../src/Images/nature4.jpg";
import nature5 from "../src/Images/nature5.jpg";
import flower2 from "../src/Images/flower2.jpg";

// Apart from the above libraries, Tailwind CSS module is also setup to enhance the UI of the image viewer along with the daisyUI library of tailwind CSS : Refer to tailwind.config.js

function App() {
  //Setting the default value of selected image as 0 so that the image viewer previews the first image upon loading
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Image Array
  const images = [
    nature1,
    nature2,
    nature3,
    nature4,
    nature5,
    flower2,
    nature3,
    nature4,
    nature5,
    flower2,
  ];

  // Handle previous function would handle the event when a user would click upon the left arrow while viewing the image
  const handlePrevious = () => {
    //selectedindex would take the arrgument prevIndex and would update it to the previous index so that the user can view the previous image
    setSelectedIndex((prevIndex) =>
      // In case the user moved to the first image, than the index would be set up to the last index of the array i.e. the index of the last image
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  // Handle Next function would handle the event when a user would click upon the right arrow while viewing the image
  const handleNext = () => {
    //selectedindex would take the arrgument prevIndex and would update it to the next index so that the user can view the next image
    setSelectedIndex((prevIndex) =>
      // In case the user moved to the last image, than the index would be set up to 0 i.e. the index of the first image
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Beginning of the JSX
  return (

    // Tailwind CSS classes are used to enhance the UI of the assignment and to ease the development
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      <div className="flex-grow flex items-center justify-center p-2 relative">
        <img
          alt="Not available"
          src={images[selectedIndex]} //The image of the selected Index would display as the src is set to select the image of the selectedIndex from the array
          className="h-96 w-1/2 object-contain"
        />

        <div className="absolute bottom-6 left-6 bg-gray-300 bg-opacity-50 px-2 py-1 rounded">
          {/* This would notify the user about the selected file from the total files */}
          Files Selected : {selectedIndex + 1} / {images.length} Files
        </div>

        {/* The user can sort the images using filter based on the image categories */}
        <div className="dropdown absolute bottom-6 right-8">

          <div tabIndex={0} role="button" className="btn m-1">
            Do Not Filter
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-black rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a href="/">Filter 1</a>
            </li>
            <li>
              <a href="/">Filter 2</a>
            </li>
          </ul>

        </div>
      </div>

      <div className="flex justify-between items-center p-3 bg-gray-800">
      
        {/* handlePrevious function is called so that the user can move to the prev image upon clicking the left arrow  */}
        <button className="p-2" onClick={handlePrevious}>
          <ChevronLeft size={24} />
        </button>

        <div className="h-30 flex-grow flex justify-center space-x-2 overflow-x-hidden">

          {/* This function would map the images in the display bar so that user can preview all the images */}
          {images.map((img, index) => (
            <img
              alt="Not available"
              key={index}
              src={img}
              className={`w-35 h-20 object-cover cursor-pointer ${
                index === selectedIndex ? "border-2 border-red-400" : ""
              }`} //If the index of the image would be equal to the selectedIndex by the user, than border-2, border-red-400 classes would be added so that the selected image gets highlighted in order to notify the user of the selected image
              onClick={() => setSelectedIndex(index)} //Once the user clicks the image it would trigger the onClick event and the index would be updated to the index of the selected image
            />
          ))}
        </div>

        {/* handleNext function is called so that the user can move to the Next image upon clicking the right arrow  */}
        <button onClick={handleNext}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default App;
