// src/components/CategoryFilter.jsx

import React, { useState } from 'react';
import './CategoryFilter.css'; // Import stylů

const CategoryFilter = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const categories = [
    'Dynamics', 'EQ & Filters', 'Time & Space', 'Modulation', 'Distortion',
    'Pitch & Tonal', 'Spatial', 'Utility & Metering', 'Creative & Special',
    'Hardware Emulation', 'Instruments', 'Synthesizers', 'Sound Design', 'All Categories',
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category === 'All Categories' ? '' : category);
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <div
          key={category}
          className={`category-item ${category === selectedCategory ? 'selected' : ''}`}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
