// src/components/Tags.js
import React from 'react';
import '../styles/_tags.scss';

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
