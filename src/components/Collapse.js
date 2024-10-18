import React, { useState } from 'react';
import '../styles/_collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        {/* arrow */}
        <span className="collapse__icon">
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronDown} style={{ color: '#ffffff' }} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} style={{ color: '#ffffff' }} />
          )}
        </span>
      </div>

      {/* content */}
      {isOpen && (
        <div className="collapse__content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
