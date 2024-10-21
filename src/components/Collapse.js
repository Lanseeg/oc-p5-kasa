import React, { useState } from "react";
import "../styles/_collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span className={`collapse__icon ${isOpen ? "open" : ""}`}>
          <FontAwesomeIcon icon={faChevronUp} style={{ color: "#ffffff" }} />
        </span>
      </div>

      {/* class 'open' */}
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
