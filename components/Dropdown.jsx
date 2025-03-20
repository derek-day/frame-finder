// components/Dropdown.js
import { useState, useRef, useEffect } from 'react';

function Dropdown({ trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={toggleDropdown} style={{cursor: "pointer"}}>
        {trigger}
      </div>
      {isOpen && (
        <div className="dropdown-content absolute left-0 mt-2 w-48 rounded-md shadow-lg z-10">
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
