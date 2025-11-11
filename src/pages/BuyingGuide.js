import React from 'react';

const BuyingGuide = () => (
  <div className="container mx-auto py-8 px-4">
    <h1 className="text-3xl font-bold mb-4">Jewelry Buying Guide</h1>
    <img src="/images/design13.jpg" alt="Jewelry Buying Guide" className="mb-6 rounded-lg shadow w-full max-w-2xl mx-auto" />
    <p className="mb-4">
      Everything you need to know before buying gold, diamond, or gemstone jewelry. Make informed decisions with our expert tips.
    </p>
    <ol className="list-decimal pl-6 mb-4">
      <li>Understand the 4Cs of diamonds: Cut, Color, Clarity, Carat</li>
      <li>Check for hallmarks and certifications</li>
      <li>Compare making charges and gold rates</li>
      <li>Choose the right metal and setting for your lifestyle</li>
      <li>Ask about after-sales service and warranties</li>
    </ol>
    <p>
      For personalized advice, contact our experts or visit our store!
    </p>
  </div>
);

export default BuyingGuide;
