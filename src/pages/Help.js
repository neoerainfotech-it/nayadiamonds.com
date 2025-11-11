import React from 'react';

const Help = () => (
  <div className="max-w-3xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6 text-center">Help & Support</h1>
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>How do I place an order?</li>
        <li>What payment methods are accepted?</li>
        <li>How can I track my order?</li>
        <li>What is your return policy?</li>
        <li>How do I contact customer support?</li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p>Email: <a href="mailto:support@jewelryshop.com" className="text-blue-600 underline">support@jewelryshop.com</a></p>
      <p>Phone: <a href="tel:+1234567890" className="text-blue-600 underline">+1 234 567 890</a></p>
      <p>Live Chat: Available 9am - 6pm IST</p>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Need More Help?</h2>
      <p>Visit our <a href="/FAQ" className="text-blue-600 underline">FAQ</a> or <a href="/Contact" className="text-blue-600 underline">Contact</a> page for more information.</p>
    </div>
  </div>
);

export default Help;
