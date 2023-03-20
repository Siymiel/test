// This components styles are imported directly into the component
// Don't load this file as part of chakra-ui theme
// More details here: https://react-select.com/styles

import { StylesConfig } from 'react-select';

const dropdownStyles: StylesConfig = {
  container: (provided) => ({
    ...provided,
    border: 'none',
    outline: 'none',
    fontSize: '.9rem',
    _focusVisible: {
      outline: 'none',
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    color: 'purple',
    padding: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'purple',
    margin: 0,
    cursor: 'pointer',
  }),
  control: (provided, state) => {
    return {
      ...provided,
      border: 'none',
      outline: 'none',
      bgColor: 'pastels.coconut',
      boxShadow: 'none',
      color: 'purple',
      backgroundColor: 'transparent',
      _hover: {
        outline: 'none',
        border: 'none',
        borderColor: '#fff',
      },
    };
  },
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
    padding: 0,
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'purple.500',
    cursor: 'pointer',
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 3,
    borderRadius: '3px',
    boxShadow: 'none',
    width: 'auto',
    margin: 0,
  }),
  input: (provided) => ({
    ...provided,
    color: 'purple',
  }),
  option: (provided) => ({
    ...provided,
    padding: '.2rem',
    borderColor: 'gray.200',
    fontSize: '.9rem',
    cursor: 'pointer',
  }),
};

export default dropdownStyles;
