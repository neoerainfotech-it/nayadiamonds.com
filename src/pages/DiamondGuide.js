import React from 'react';

const diamondTips = [
  {
    icon: '💎',
    title: 'The 4Cs of Diamonds',
    desc: 'Understand Cut, Color, Clarity, and Carat to make an informed purchase.'
  },
  {
    icon: '🔬',
    title: 'Certification',
    desc: 'Always look for GIA or IGI certification for authenticity and value.'
  },
  {
    icon: '💡',
    title: 'Shape & Setting',
    desc: 'Choose a shape and setting that matches your style and daily wear.'
  },
  {
    icon: '💰',
    title: 'Budget Smartly',
    desc: 'Balance the 4Cs to get the best value for your budget.'
  },
  {
    icon: '🧼',
    title: 'Care & Cleaning',
    desc: 'Clean diamonds regularly and store them separately to maintain brilliance.'
  },
];

function DiamondGuide() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Diamond Buying Guide</h1>
          <p className="text-lg text-blue-800 mb-2">Everything you need to know before buying a diamond. Make a confident, informed choice with our expert tips and insights.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {diamondTips.map((tip, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
              <div className="text-3xl">{tip.icon}</div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">{tip.title}</h3>
                <p className="text-blue-800 text-sm">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-100 rounded-lg p-8 shadow text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Buy Diamonds from Vamana?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="text-center">
              <div className="text-3xl mb-2">✅</div>
              <h4 className="font-semibold mb-2">Certified Stones</h4>
              <p className="text-blue-800 text-sm">All diamonds are GIA/IGI certified for peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="font-semibold mb-2">Wide Selection</h4>
              <p className="text-blue-800 text-sm">Choose from classic solitaires to modern designer pieces.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-semibold mb-2">Secure Shopping</h4>
              <p className="text-blue-800 text-sm">Safe, insured delivery and easy returns for every order.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiamondGuide;
