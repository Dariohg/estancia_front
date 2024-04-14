import React from 'react';
import Select from 'react-select';
import "../../styles/global.css";

const Dropdown = ({ value, onChange, options }) => {
    const handleChange = (selectedOption) => {
        onChange(selectedOption.value);
    };

    const selectOptions = options.map((option) => ({
        value: option.value,
        label: option.label,
    }));

    return (
        <Select
            value={selectOptions.find(option => option.value === value)}
            onChange={handleChange}
            options={selectOptions}
            isSearchable
            placeholder="Search..."
        />
    );
};

export default Dropdown;
