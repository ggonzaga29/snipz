import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Dropdown = ({ children, className, toggleDropdown }) => {
	const [isOpen, setIsOpen] = useState(false);

	return <div className={`relative ${className}`}>{children}</div>;
};

export default Dropdown;
