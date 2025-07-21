import React from 'react';

const CardInfo = ({ title, description, icon, backgroundIcon }) => {
  return (
    <div className="border border-green-100 hover:shadow-lg transition-shadow bg-white rounded-xl">
      <div className="p-8 text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${backgroundIcon}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
