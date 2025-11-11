import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Priya S.",
    review: "I found the perfect engagement ring at Vamana Jewels. The quality and service were outstanding!",
    avatar: "/images/design1.jpg"
  },
  {
    name: "Rahul M.",
    review: "Amazing craftsmanship and fast delivery. My wife loved the necklace!",
    avatar: "/images/design2.jpg"
  },
  {
    name: "Aisha K.",
    review: "Great customer support and beautiful designs. Will shop again!",
    avatar: "/images/design3.jpg"
  },
  {
    name: "Vikram D.",
    review: "The virtual try-on feature was super helpful. Highly recommend Vamana Jewels.",
    avatar: "/images/design4.jpg"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ]
};

const CustomerReviewCarousel = () => (
  <section className="home-section py-12 bg-white">
    <h2 className="section-title text-center mb-8">What Our Customers Say</h2>
    <div className="max-w-4xl mx-auto">
      <Slider {...settings}>
        {reviews.map((r, i) => (
          <div key={i} className="px-4">
            <div className="bg-yellow-50 rounded-lg shadow p-6 flex flex-col items-center text-center h-full">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-yellow-300"
              />
              <p className="text-brown-900 font-medium mb-2">"{r.review}"</p>
              <span className="text-brown-700 font-semibold">{r.name}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

export default CustomerReviewCarousel;
