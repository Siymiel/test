// This components styles are imported directly into the component
// Don't load this file as part of chakra-ui theme
// More details here: https://react-select.com/styles

import { GroupBase, StylesConfig } from 'react-select';

const typeaheadStyles: StylesConfig<unknown, true, GroupBase<unknown>> = {
  option: (provided, state) => ({
    ...provided,
    color: '#333333',
    backgroundColor: state.isFocused ? 'rgb(18 48 88 / 4%)' : '#fff',
    padding: '12px 16px',
    cursor: 'pointer',
    transition: 'background-color 0.25s',
    ':hover': {
      backgroundColor: 'rgb(18 48 88 / 4%)',
    },
  }),
  control: (provided, state) => {
    return {
      ...provided,
      minHeight: '3.5rem',
      borderColor: state.isFocused ? '#1D4F91' : '#DDDDDD',
      borderRadius: '3px',
      paddingTop: '6px',
      paddingBottom: '6px',
      ':hover': {
        borderColor: '#737373',
      },
    };
  },
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
  valueContainer: (provided) => ({
    ...provided,
    padding: '2px 12px',
  }),
  multiValueLabel: () => ({
    color: '#333333',
    padding: '4px 5px 4px 4px',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#F8F8F8',
    margin: '2px 4px',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    padding: '0.5rem',
    borderTopLeftRadius: 0,
    color: '#737373',
    borderBottomLeftRadius: 0,
    transition: 'background-color 0.25s',
    ':hover': {
      backgroundColor: '#DDDDDD',
      color: '#333333',
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '3px',
    marginTop: '4px',
    boxShadow: 'none',
    border: '1px solid #DDDDDD',
  }),
  menuList: (provided) => ({
    ...provided,
    padding: '8px 0',
  }),
};

export default typeaheadStyles;
