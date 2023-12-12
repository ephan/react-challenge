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
    <select value={value} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
