import { useState } from 'react';
import servicesData from './services.json';
const Accordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="w-[90%] rounded-lg overflow-hidden pb-8">
      <h2 className="text-3xl font-bold text-center m-6">
        {servicesData.servicesTitle}
      </h2>
      {servicesData.services.map((service, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex justify-between items-center p-6 cursor-pointer transition-colors
              ${openItem === index 
                ? 'bg-blue-50 hover:bg-blue-100' 
                : 'hover:bg-gray-100'
              }`}
          >
            <h3 className="font-semibold text-left text-2xl">{service.title}</h3>
            <span className="text-xl">{openItem === index ? '−' : '+'}</span>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out bg-white overflow-hidden
              ${openItem === index 
                ? 'max-h-48 p-4' 
                : 'max-h-0'
              }`}
          >
            <p className="text-gray-700 text-xl py-5">{service.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
