import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./MaterialCarousel.css";

const materialItems = [
  {
    title: "Gold",
    img: process.env.PUBLIC_URL + "/images/design3.jpg",
    link: "/category/gold",
  },
  {
    title: "Diamond",
    img: process.env.PUBLIC_URL + "/images/design10.jpg",
    link: "/category/diamond",
  },
  {
    title: "Silver",
    img: process.env.PUBLIC_URL + "/images/ring_041.jpg",
    link: "/category/silver",
  },
  {
    title: "Platinum",
    img: process.env.PUBLIC_URL + "/images/design17.jpg",
    link: "/category/platinum",
  },
];

const MaterialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);
  const containerRef = useRef();

  const updateIndex = (newIndex) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const total = materialItems.length;
    const index = (newIndex + total) % total;
    setCurrentIndex(index);

    // match animation duration in CSS
    setTimeout(() => {
      isAnimating.current = false;
    }, 500);
  };

  const handleClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX;

    if (clickX < rect.left + rect.width / 2) {
      updateIndex(currentIndex - 1);
    } else {
      updateIndex(currentIndex + 1);
    }
  };

  return (
    <div className="material-carousel-wrapper">
      <h2 className="material-title">Shop by Material</h2>
      <div
        className="material-carousel-container"
        onClick={handleClick}
        ref={containerRef}
      >
        <div className="material-carousel-track">
          {materialItems.map((item, i) => {
            // calculate offset relative to current index
            const total = materialItems.length;
            let offset = (i - currentIndex + total) % total;
            // normalize to -2..2 for 4 items (so left-2 becomes -2)
            if (offset > Math.floor(total / 2)) {
              offset = offset - total;
            }

            // choose a position class (center, left-1, left-2, right-1, right-2, hidden)
            let position = "hidden";
            if (offset === 0) position = "center";
            else if (offset === 1) position = "right-1";
            else if (offset === 2) position = "right-2";
            else if (offset === -1) position = "left-1";
            else if (offset === -2) position = "left-2";

            return (
              <Link to={item.link} key={i} className={`material-card ${position}`}>
                <img src={item.img} alt={item.title} />
                <div className="material-name">{item.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MaterialCarousel;
