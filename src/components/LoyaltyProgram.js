import React, { useState, useEffect } from 'react';
import { 
  GiftIcon,
  StarIcon,
  CrownIcon,
  SparklesIcon,
  TrophyIcon,
  CreditCardIcon,
  CalendarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const LoyaltyProgram = () => {
  const [userPoints, setUserPoints] = useState(1250);
  const [userTier, setUserTier] = useState('silver');
  const [rewards, setRewards] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');

  const tiers = [
    { 
      id: 'bronze',
      name: 'Bronze',
      minPoints: 0,
      maxPoints: 999,
      color: '#cd7f32',
      benefits: [
        'Earn 1 point per $1 spent',
        'Free shipping on orders over $500',
        'Birthday discount',
        'Access to exclusive sales'
      ]
    },
    {
      id: 'silver',
      name: 'Silver',
      minPoints: 1000,
      maxPoints: 4999,
      color: '#c0c0c0',
      benefits: [
        'Earn 1.5 points per $1 spent',
        'Free shipping on all orders',
        'Priority customer service',
        'Exclusive member-only events',
        'Free gift wrapping',
        'Extended return window (45 days)'
      ]
    },
    {
      id: 'gold',
      name: 'Gold',
      minPoints: 5000,
      maxPoints: 19999,
      color: '#ffd700',
      benefits: [
        'Earn 2 points per $1 spent',
        'Free express shipping',
        'Personal jewelry consultant',
        'VIP event invitations',
        'Complimentary cleaning service',
        'Early access to new collections',
        'Free engraving on all purchases'
      ]
    },
    {
      id: 'platinum',
      name: 'Platinum',
      minPoints: 20000,
      maxPoints: Infinity,
      color: '#e5e4e2',
      benefits: [
        'Earn 3 points per $1 spent',
        'Free overnight shipping',
        'Dedicated account manager',
        'Exclusive platinum-only events',
        'Complimentary jewelry insurance',
        'Custom design consultations',
        'Lifetime warranty on all purchases',
        'Annual jewelry appraisal'
      ]
    }
  ];

  const availableRewards = [
    {
      id: 1,
      name: '$25 Store Credit',
      points: 250,
      description: 'Redeem for any purchase',
      category: 'credit',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Free Shipping',
      points: 100,
      description: 'Free shipping on your next order',
      category: 'shipping',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Jewelry Cleaning',
      points: 150,
      description: 'Professional cleaning service',
      category: 'service',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop'
    },
    {
      id: 4,
      name: '$50 Store Credit',
      points: 500,
      description: 'Redeem for any purchase',
      category: 'credit',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=200&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'Free Engraving',
      points: 75,
      description: 'Personal engraving on any item',
      category: 'service',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=200&h=200&fit=crop'
    },
    {
      id: 6,
      name: '$100 Store Credit',
      points: 1000,
      description: 'Redeem for any purchase',
      category: 'credit',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop'
    }
  ];

  const userRewards = [
    {
      id: 1,
      name: '$25 Store Credit',
      points: 250,
      redeemedAt: '2024-01-15',
      expiresAt: '2024-12-31',
      status: 'active'
    },
    {
      id: 2,
      name: 'Free Shipping',
      points: 100,
      redeemedAt: '2024-01-10',
      expiresAt: '2024-06-30',
      status: 'used'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'purchase',
      description: 'Diamond Ring Purchase',
      points: 150,
      date: '2024-01-20',
      status: 'earned'
    },
    {
      id: 2,
      type: 'reward',
      description: 'Redeemed $25 Store Credit',
      points: -250,
      date: '2024-01-15',
      status: 'redeemed'
    },
    {
      id: 3,
      type: 'bonus',
      description: 'Birthday Bonus Points',
      points: 100,
      date: '2024-01-10',
      status: 'earned'
    },
    {
      id: 4,
      type: 'purchase',
      description: 'Necklace Purchase',
      points: 75,
      date: '2024-01-05',
      status: 'earned'
    }
  ];

  const currentTier = tiers.find(tier => tier.id === userTier);
  const nextTier = tiers.find(tier => tier.minPoints > userPoints);
  const progressToNextTier = nextTier ? ((userPoints - currentTier.maxPoints) / (nextTier.minPoints - currentTier.maxPoints)) * 100 : 100;

  const handleRedeemReward = (reward) => {
    if (userPoints >= reward.points) {
      setUserPoints(prev => prev - reward.points);
      setRewards(prev => [...prev, {
        ...reward,
        redeemedAt: new Date().toISOString().split('T')[0],
        expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: 'active'
      }]);
      alert(`Successfully redeemed ${reward.name}!`);
    } else {
      alert('Not enough points to redeem this reward.');
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: StarIcon },
    { id: 'rewards', label: 'Rewards', icon: GiftIcon },
    { id: 'activity', label: 'Activity', icon: CalendarIcon },
    { id: 'benefits', label: 'Benefits', icon: CrownIcon }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Loyalty Rewards</h2>
            <p className="text-gold-100">Earn points with every purchase and unlock exclusive benefits</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{userPoints.toLocaleString()}</div>
            <div className="text-gold-100">Total Points</div>
          </div>
        </div>

        {/* Tier Progress */}
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <CrownIcon className="w-5 h-5" />
              <span className="font-semibold">{currentTier.name} Member</span>
            </div>
            {nextTier && (
              <span className="text-sm">
                {nextTier.minPoints - userPoints} points to {nextTier.name}
              </span>
            )}
          </div>
          <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(progressToNextTier, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-gold-500 text-gold-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Current Tier Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your {currentTier.name} Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentTier.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gold-600">{userPoints}</div>
                <div className="text-sm text-gray-600">Available Points</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gold-600">{userRewards.length}</div>
                <div className="text-sm text-gray-600">Active Rewards</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gold-600">{currentTier.name}</div>
                <div className="text-sm text-gray-600">Current Tier</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rewards' && (
          <div className="space-y-6">
            {/* Available Rewards */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Rewards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableRewards.map((reward) => (
                  <div key={reward.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                      <img
                        src={reward.image}
                        alt={reward.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{reward.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gold-600">{reward.points} pts</span>
                      <button
                        onClick={() => handleRedeemReward(reward)}
                        disabled={userPoints < reward.points}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          userPoints >= reward.points
                            ? 'bg-gold-500 text-white hover:bg-gold-600'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Redeem
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* My Rewards */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">My Rewards</h3>
              <div className="space-y-3">
                {userRewards.map((reward) => (
                  <div key={reward.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{reward.name}</h4>
                      <p className="text-sm text-gray-600">
                        Redeemed on {reward.redeemedAt} • Expires {reward.expiresAt}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      reward.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {reward.status === 'active' ? 'Active' : 'Used'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.status === 'earned' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {activity.status === 'earned' ? (
                        <SparklesIcon className="w-4 h-4 text-green-600" />
                      ) : (
                        <GiftIcon className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{activity.description}</h4>
                      <p className="text-sm text-gray-600">{activity.date}</p>
                    </div>
                  </div>
                  <span className={`font-semibold ${
                    activity.points > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {activity.points > 0 ? '+' : ''}{activity.points} pts
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'benefits' && (
          <div className="space-y-6">
            {/* All Tiers */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tier Benefits</h3>
              <div className="space-y-4">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`border-2 rounded-lg p-4 ${
                      tier.id === userTier
                        ? 'border-gold-500 bg-gold-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: tier.color }}
                        />
                        <h4 className="font-semibold text-gray-900">{tier.name} Tier</h4>
                        {tier.id === userTier && (
                          <span className="bg-gold-500 text-white px-2 py-1 rounded-full text-xs">
                            Current
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-600">
                        {tier.minPoints.toLocaleString()} - {tier.maxPoints === Infinity ? '∞' : tier.maxPoints.toLocaleString()} points
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tier.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mt-0.5" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Earn */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">How to Earn Points</h4>
              <div className="space-y-2 text-blue-700">
                <div className="flex items-center space-x-2">
                  <CreditCardIcon className="w-4 h-4" />
                  <span>Earn points on every purchase</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Birthday bonus points</span>
                </div>
                <div className="flex items-center space-x-2">
                  <StarIcon className="w-4 h-4" />
                  <span>Write reviews for bonus points</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrophyIcon className="w-4 h-4" />
                  <span>Refer friends for rewards</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoyaltyProgram; 