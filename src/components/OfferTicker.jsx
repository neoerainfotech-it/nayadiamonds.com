import React from 'react';
import './OfferTicker.css';

const offers = [
  { text: 'Up to 30% off everything', link: '#' },
  { text: 'Register to enjoy 10% off* your first online order', link: '#' },
  { text: 'Free delivery for next 3 orders', link: '#' },
  { text: '20% off most loved - new lines added', link: '#' },
];

function OfferTicker() {
  const repeatedOffers = [...offers, ...offers, ...offers]; // Repeat for smooth scroll

  return (
    <div className="offer-ticker">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {repeatedOffers.map((offer, index) => (
            <div key={index} className="ticker-item">
              <svg
                className="ticker-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M17.354 15.475l10.39-10.39-0.829-0.774-10.335 10.39v-14.701h-1.105v14.701l-10.39-10.39-0.774 0.774 10.39 10.39h-14.701v1.105h14.701l-10.39 10.335 0.774 0.829 10.39-10.39v14.646h1.105v-14.646l10.335 10.39 0.829-0.829-10.39-10.335h14.646v-1.105h-14.646z" />
              </svg>
              <a href={offer.link} title={offer.text}>{offer.text}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfferTicker;
