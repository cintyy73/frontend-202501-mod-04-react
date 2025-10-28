import React from 'react';
import { FaCoffee, FaHeart } from 'react-icons/fa';
import { MdCheckCircle, MdError } from 'react-icons/md';

function IconExample () {
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <FaCoffee size={24} color="brown" />
      <FaHeart size={24} color="red" />
      <MdCheckCircle size={24} color="green" />
      <MdError size={64} color="orange" />
    </div>
  );
}

export default IconExample
