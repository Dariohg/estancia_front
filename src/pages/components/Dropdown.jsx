import React from 'react';
import Select from 'react-select';
import "../../styles/global.css";

const Dropdown = ({ value, onChange, options }) => {
    const handleChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : null;
        console.log('handleChange - selectedOption:', selectedOption);
        console.log('handleChange - selectedValue:', selectedValue);
        onChange(selectedValue);
    };

    return (
        <Select
            value={options.find((option) => option.value === value) || null}
            onChange={handleChange}
            options={options}
            isSearchable
            placeholder="Search..."
        />
    );
};

export default Dropdown;
