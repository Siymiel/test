// This components styles are imported directly into the component
// Don't load this file as part of chakra-ui theme
// More details here: https://react-select.com/styles

import { StylesConfig } from 'react-select';

const dropdownStyles: StylesConfig = {
  valueContainer: (provided) => ({
    ...provided,
    padding: '0.75rem 0.875rem',
  }),
  control: (provided, state) => {
    return {
      ...provided,
      borderColor: state.isFocused ? '#333333' : '#DDDDDD',
      borderRadius: '3px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#333333',
      },
    };
  },
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#737373',
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 3,
    borderRadius: '3px',
  }),
  groupHeading: (provided) => ({
    ...provided,
    textTransform: 'capitalize',
    fontSize: '1rem',
    fontWeight: 700,
    color: '#333333',
    padding: '0.75rem 1rem',
    borderBottom: '1px solid',
    borderColor: '#DDDDDD',
  }),
  option: (provided) => ({
    ...provided,
    padding: '0.75rem 1rem',
  }),
};

export default dropdownStyles;
