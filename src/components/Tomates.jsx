import React, { useState } from 'react';

const tomatoData = [
  {
    name: 'Amela',
    images: [require('../assets/tomatedulce/amela1.jpg'), require('../assets/tomatedulce/amela2.jpg')],
    description: 'Tomate Dulce',
  },
  {
    name: 'Dulcextra',
    images: [require('../assets/tomatedulce/dulcextra1.jpg'), require('../assets/tomatedulce/dulcextra2.jpg')],
    description: 'Tomate Dulce',
  },
  {
    name: 'Adora',
    images: [require('../assets/tradicional/adora1.jpg'), require('../assets/tradicional/adora2.jpg')],
    description: 'Tomate Asurcado Marrón',
  },
  {
    name: 'Primora',
    images: [require('../assets/tradicional/primora1.jpg'), require('../assets/tradicional/primora2.jpg')],
    description: 'Tomate Asurcado Marrón',
  },
  {
    name: 'Chocmato',
    images: [require('../assets/tradicional/chocmato1.jpg'), require('../assets/tradicional/chocmato2.jpg')],
    description: 'Tomate Asurcado Marrón',
  },
  {
    name: 'Antociano',
    images: [require('../assets/tradicional/antociano1.jpg'), require('../assets/tradicional/antociano2.jpg')],
    description: 'Tomate Dulce',
  },
];

function Tomates() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="tomates">
      <div className="py-20">
        <div className="xl:container mx-auto px-6 md:px-12">
          {/* Tu contenido anterior */}
        </div>
      </div>

      <div className="py-20">
        <div className="xl:container mx-auto px-6 md:px-12">
          {/* Tomates */}
          <div className="mb-16 md:w-2/3 lg:w-1/2">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Tomates
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Tailus prides itself not only on award-winning technology, but also on the talent of its
              people of some of the brightest minds and most experienced executives in business.
            </p>
          </div>
          <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {tomatoData.map((tomato, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl space-y-6 overflow-hidden ${
                  hoveredIndex === index ? 'group-hover:scale-105 group-hover:grayscale-0' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className="mx-auto h-[26rem] w-full object-cover object-top transition duration-500"
                  src={tomato.images[hoveredIndex === index ? 1 : 0]}
                  alt={`Tomate ${tomato.name}`}
                  width="640"
                  height="805"
                />
                <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl font-semibold dark:text-gray-700 text-white">{tomato.name}</h4>
                    <span className="block text-sm text-gray-500">{tomato.description}</span>
                  </div>
                  <p className="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tomates;
