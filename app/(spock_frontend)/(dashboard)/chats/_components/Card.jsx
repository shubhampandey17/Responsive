// _components/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="text-lg font-medium mb-2">{title}</div>
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;