import { useState } from "react";
import "./styles.css";
import toast, { Toaster } from "react-hot-toast";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  "https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
];

export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    if (current === images.length - 1) {
      toast.dismiss();
      toast.error("This is the last image!");
      return;
    }
    setCurrent((prev) => prev + 1);
  }

  function prevSlide() {
    if (current === 0) {
      toast.dismiss();
      toast.error("This is the first image!");
      return;
    }
    setCurrent((prev) => prev - 1);
  }

  return (
    <div className="carousel">
      <h2>Carousel</h2>
      <Toaster position="top-right" />
      <div className="slider-wrapper">
        <button
          onClick={prevSlide}
          className={`nav-button ${current === 0 ? "disabled" : ""}`}
        >
          ⬅ Prev
        </button>

        <div className="slide-container">
          <img src={images[current]} alt="slide" className="slide active" />
        </div>

        <button
          onClick={nextSlide}
          className={`nav-button ${
            current === images.length - 1 ? "disabled" : ""
          }`}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
