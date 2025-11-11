import React from 'react';
import { StarIcon, ShieldCheckIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      icon: StarIcon,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every piece we create.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability.'
    },
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'Our love for jewelry craftsmanship drives everything we do.'
    },
    {
      icon: SparklesIcon,
      title: 'Innovation',
      description: 'Combining traditional techniques with modern design trends.'
    }
  ];

  const milestones = [
    {
      year: '1985',
      title: 'Foundation',
      description: 'VJS Jewels was established in Chennai with a vision to create exceptional jewelry.'
    },
    {
      year: '1995',
      title: 'First Showroom',
      description: 'Opened our flagship store on Anna Salai, becoming a landmark in Chennai.'
    },
    {
      year: '2005',
      title: 'Diamond Certification',
      description: 'Became the first jewelry store in Tamil Nadu to offer GIA certified diamonds.'
    },
    {
      year: '2015',
      title: 'Digital Transformation',
      description: 'Launched our online platform to serve customers across India.'
    },
    {
      year: '2023',
      title: '40th Anniversary',
      description: 'Celebrated 40 years of excellence with over 100,000 satisfied customers.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'With over 40 years of experience in the jewelry industry, Rajesh leads our company with passion and expertise.'
    },
    {
      name: 'Priya Sharma',
      position: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Priya brings her artistic vision to create stunning designs that capture the essence of modern luxury.'
    },
    {
      name: 'Arun Patel',
      position: 'Master Craftsman',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Arun\'s skilled hands transform precious metals and stones into works of art.'
    },
    {
      name: 'Meera Iyer',
      position: 'Customer Relations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Meera ensures every customer receives personalized attention and exceptional service.'
    }
  ];

  const certifications = [
    {
      name: 'BIS Hallmark',
      description: 'All our gold jewelry is hallmarked by the Bureau of Indian Standards.'
    },
    {
      name: 'GIA Certified',
      description: 'Our diamonds come with Gemological Institute of America certification.'
    },
    {
      name: 'ISO 9001:2015',
      description: 'Certified for quality management systems and processes.'
    },
    {
      name: 'Responsible Jewellery Council',
      description: 'Committed to responsible business practices in the jewelry supply chain.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            {/* Company Badge */}
            <div className="inline-flex items-center bg-yellow-500 bg-opacity-20 px-6 py-3 rounded-full mb-8">
              <span className="text-2xl mr-3">✨</span>
              <span className="font-semibold">Established 1985</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              About <span className="text-yellow-300">VJS Jewels</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto leading-relaxed mb-12">
              For over four decades, we've been crafting exceptional jewelry that tells your story. 
              From traditional designs to contemporary masterpieces, we bring your dreams to life with 
              unmatched craftsmanship and timeless elegance.
            </p>
            
            {/* Key Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-yellow-500 bg-opacity-20 px-6 py-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-1">40+</div>
                <div className="text-sm text-yellow-100">Years of Excellence</div>
              </div>
              <div className="bg-yellow-500 bg-opacity-20 px-6 py-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-1">100K+</div>
                <div className="text-sm text-yellow-100">Happy Customers</div>
              </div>
              <div className="bg-yellow-500 bg-opacity-20 px-6 py-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-1">50K+</div>
                <div className="text-sm text-yellow-100">Jewelry Pieces</div>
              </div>
              <div className="bg-yellow-500 bg-opacity-20 px-6 py-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-1">3</div>
                <div className="text-sm text-yellow-100">Showrooms</div>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center bg-yellow-500 bg-opacity-20 px-4 py-2 rounded-full">
                <span className="mr-2">🏆</span>
                <span>BIS Hallmarked</span>
              </div>
              <div className="flex items-center bg-yellow-500 bg-opacity-20 px-4 py-2 rounded-full">
                <span className="mr-2">💎</span>
                <span>GIA Certified</span>
              </div>
              <div className="flex items-center bg-yellow-500 bg-opacity-20 px-4 py-2 rounded-full">
                <span className="mr-2">🛡️</span>
                <span>Lifetime Warranty</span>
              </div>
              <div className="flex items-center bg-yellow-500 bg-opacity-20 px-4 py-2 rounded-full">
                <span className="mr-2">✨</span>
                <span>ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-yellow-300 opacity-20">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 text-yellow-300 opacity-20">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 1985 by Mr. Rajesh Kumar, VJS Jewels began as a small family workshop 
                  in the heart of Chennai. What started with a passion for creating beautiful jewelry 
                  has grown into one of Tamil Nadu's most trusted jewelry brands.
                </p>
                <p>
                  Our journey has been marked by unwavering commitment to quality, craftsmanship, 
                  and customer satisfaction. We believe that every piece of jewelry should not just 
                  be beautiful, but should also carry the weight of tradition and the promise of 
                  lasting value.
                </p>
                <p>
                  Today, with multiple showrooms across Chennai and a growing online presence, 
                  we continue to serve thousands of families, helping them celebrate life's most 
                  precious moments with our exquisite collections.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=600&h=600&fit=crop"
                  alt="Jewelry Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600">40+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gold-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-gold-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gold-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gold-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-gold-600 to-gold-800 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100,000+</div>
              <div className="text-gold-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-gold-100">Jewelry Pieces</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-gold-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-gold-100">Showrooms</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 