'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type InvestmentType = 'unlisted' | 'realestate';

const companies = [
  {
    id: 1,
    name: 'Tesla Inc.',
    logo: '🚗',
    sector: 'Automotive & Tech',
    valuation: '150M',
    minInvestment: '5,000',
    availableShares: 50000,
    description: 'Leading electric vehicle and clean energy company revolutionizing transportation.'
  },
  {
    id: 2,
    name: 'SpaceX',
    logo: '🚀',
    sector: 'Aerospace',
    valuation: '250M',
    minInvestment: '10,000',
    availableShares: 25000,
    description: 'Space exploration and satellite internet company pushing the boundaries of space technology.'
  },
  {
    id: 3,
    name: 'Stripe',
    logo: '💳',
    sector: 'Fintech',
    valuation: '180M',
    minInvestment: '7,500',
    availableShares: 35000,
    description: 'Online payment processing platform for internet businesses worldwide.'
  },
  {
    id: 4,
    name: 'Impossible Foods',
    logo: '🌱',
    sector: 'Food Tech',
    valuation: '120M',
    minInvestment: '3,000',
    availableShares: 45000,
    description: 'Plant-based meat company developing sustainable food alternatives.'
  }
];

const properties = [
  {
    id: 1,
    name: 'Luxury Downtown Apartments',
    location: 'Manhattan, NY',
    valuation: '75M',
    minInvestment: '25,000',
    availableFrax: 150000,
    ratePerFrax: '100',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500'
    ]
  },
  {
    id: 2,
    name: 'Tech Hub Office Complex',
    location: 'San Francisco, CA',
    valuation: '120M',
    minInvestment: '50,000',
    availableFrax: 200000,
    ratePerFrax: '150',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500'
    ]
  },
  {
    id: 3,
    name: 'Waterfront Retail Plaza',
    location: 'Miami, FL',
    valuation: '95M',
    minInvestment: '35,000',
    availableFrax: 180000,
    ratePerFrax: '125',
    images: [
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=500',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500'
    ]
  },
  {
    id: 4,
    name: 'Mountain View Residences',
    location: 'Denver, CO',
    valuation: '65M',
    minInvestment: '20,000',
    availableFrax: 130000,
    ratePerFrax: '90',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=500'
    ]
  }
];

const ITEMS_PER_PAGE = 4;
const ITEMS_PER_PAGE_EXPANDED = 8;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};

export default function InvestmentOpportunities() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<InvestmentType>('unlisted');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showMore, setShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = showMore ? ITEMS_PER_PAGE_EXPANDED : ITEMS_PER_PAGE;
  const items = activeTab === 'unlisted' ? companies : properties;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInvestClick = (item: any, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the tile click event from firing
    router.push(`/investments/${item.id}`);
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'unlisted'
                ? 'bg-red-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('unlisted')}
          >
            Unlisted Securities
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'realestate'
                ? 'bg-red-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('realestate')}
          >
            Real Estate Properties
          </button>
        </div>
        <div className="flex gap-2">
          <select className="rounded-md bg-gray-800 border-gray-700 text-gray-300 shadow-sm text-sm">
            <option>All Sectors</option>
            <option>Technology</option>
            <option>Real Estate</option>
            <option>Healthcare</option>
            <option>Finance</option>
          </select>
          <select className="rounded-md bg-gray-800 border-gray-700 text-gray-300 shadow-sm text-sm">
            <option>Sort by: Newest</option>
            <option>Sort by: Valuation</option>
            <option>Sort by: Min Investment</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {activeTab === 'unlisted' ? (
          displayedItems.map((company: any) => (
            <div
              key={company.id}
              className="border border-gray-800 bg-gray-800 rounded-lg p-4 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedItem(company)}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{company.logo}</span>
                <div>
                  <h3 className="font-medium text-white">{company.name}</h3>
                  <p className="text-sm text-gray-400">{company.sector}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Valuation</span>
                  <span className="font-medium text-white">${company.valuation}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Min Investment</span>
                  <span className="font-medium text-white">${company.minInvestment}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Available Shares</span>
                  <span className="font-medium text-white">{company.availableShares.toLocaleString()}</span>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-300 line-clamp-2">{company.description}</p>
              <button 
                className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700"
                onClick={(e) => handleInvestClick(company, e)}
              >
                Invest Now
              </button>
            </div>
          ))
        ) : (
          displayedItems.map((property: any) => (
            <div
              key={property.id}
              className="border border-gray-800 bg-gray-800 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedItem(property)}
            >
              <div className="relative">
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-gray-900/80 text-white px-2 py-1 rounded-md text-xs">
                    {property.location}
                  </span>
                </div>
                <div className="property-slider">
                  <Slider {...sliderSettings}>
                    {property.images.map((image: string, index: number) => (
                      <div key={index} className="relative h-48">
                        <img
                          src={image}
                          alt={`${property.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-white mb-2">{property.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Current Valuation</span>
                    <span className="font-medium text-white">${property.valuation}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Min Investment</span>
                    <span className="font-medium text-white">${property.minInvestment}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Available FRAX</span>
                    <span className="font-medium text-white">{property.availableFrax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Rate per FRAX</span>
                    <span className="font-medium text-white">${property.ratePerFrax}</span>
                  </div>
                </div>
                <button 
                  className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700"
                  onClick={(e) => handleInvestClick(property, e)}
                >
                  Invest Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        {!showMore && items.length > ITEMS_PER_PAGE && (
          <button
            onClick={() => setShowMore(true)}
            className="bg-gray-800 text-red-500 px-4 py-2 rounded-md text-sm border border-red-500 hover:bg-gray-700"
          >
            View More
          </button>
        )}
        
        {showMore && (
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-md text-sm ${
                  currentPage === page
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-red-500 border border-red-500 hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}