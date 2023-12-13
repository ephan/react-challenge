import React from 'react';

type DropdownProps = {
  options: string[] | number[];
  value: string | number;
  onChange: (value: string | number) => void;
};

function Dropdown({ options, value, onChange }: DropdownProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      className="border border-gray-400 rounded-md sticky top-0 p-2"
      value={value}
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
