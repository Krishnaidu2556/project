import React, { useState } from 'react';

// Create a context to hold the selected options
const ChecklistContext = React.createContext();

function Checkbox({ label, value }) {
  const { selectedOptions, updateSelectedOptions } = React.useContext(ChecklistContext);

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    updateSelectedOptions(value, isChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        value={value}
        checked={selectedOptions.includes(value)}
        onChange={handleChange}
      />
      {label}
    </label>
  );
}

function Checklist() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Function to update selected options based on checkbox changes
  const updateSelectedOptions = (value, isChecked) => {
    if (isChecked) {
      setSelectedOptions((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedOptions((prevSelected) => prevSelected.filter(option => option !== value));
    }
  };

  return (
    <ChecklistContext.Provider value={{ selectedOptions, updateSelectedOptions }}>
      <div>
        <h2>Checklist</h2>
        <Checkbox label="Option 1" value="option1" />
        <Checkbox label="Option 2" value="option2" />
        <Checkbox label="Option 3" value="option3" />

        <h3>Selected Options:</h3>
        <ul>
          {selectedOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </ChecklistContext.Provider>
  );
}

export default Checklist;
