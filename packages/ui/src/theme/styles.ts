import { globalRadioButtonStyles } from './components/radio';
// import { flexbox } from '@chakra-ui/react';
// Customizing chakra global styles
const styles = {
  global: {
    body: {
      bg: 'gray.white',
      color: 'gray.dark',
      fontWeight: 400,
      '*::placeholder': {
        color: 'gray.gray',
      },
    },
    // styles for the `a`
    a: {
      fontWeight: 500,
      color: 'primary.raspberry',
      _hover: {
        textDecoration: 'underline',
      },
    },
    '#chakra-toast-manager-top-right': {
      top: '56px!important',
    },
    '.text-right': {
      textAlign: 'right',
      '@media print': {
        textAlign: 'initial',
      },
    },
    '.chakra-fade': {
      height: '100%',
    },
    '.expandable-table': {
      'tr td:nth-last-of-type(2), tr th:nth-last-of-type(2)': {
        borderRight: 0,
      },
    },
    '.expandable-table-content': {
      'tr td, tr th': {
        _last: {
          borderLeft: '1px',
          borderColor: 'gray.light',
        },
      },
    },
    '.rechart-dot': {
      _before: {
        content: `""`,
        display: 'block',
        w: '0.5rem',
        h: '0.5rem',
        borderRadius: '7.5px',
        bgColor: 'secondary.yellow',
      },
    },
    '.report-column, .td': {
      '@media print': {
        width: '90px!important', // This is an inline style added by react table and needs to be smaller only when the page is exported as report/ print.
      },
    },
    '.score-distribution-chart-report': {
      width: '70%!important', // This is an inline style added by recharts and needs to be smaller only when the page is exported as report/ print.
    },
    '.unstyled-list': {
      listStyle: 'none',
    },
    '.unstyled-list-row': {
      listStyle: 'none',
      display: 'flex',
    },
    '.pagination-container': {
      marginBottom: '2rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      listStyleType: 'none',
      marginTop: '3em',
    },
    '.pagination-li': {
      height: '40px',
      lineHeight: '2.5',
    },
    '.pagination-li-a': {
      borderRadius: '50%',
      borderColor: 'transparent',
      cursor: 'pointer',
      color: '#333333',
      padding: '1em',
    },
    '.pagination-active': {
      backgroundColor: '#1d4f91',
      borderColor: 'transparent',
      borderRadius: '50%',
      a: {
        color: '#fff',
      },
    },
    '.pagination-prev': {
      a: {
        lineHeight: '2.5',
        color: '#333333',
        marginRight: '.6em',
      },
    },
    '.pagination-next': {
      a: {
        lineHeight: '2.5',
        color: '#333333',
        marginLeft: '.6em',
      },
    },

    '@media all': {
      '.page-break': {
        display: 'none',
      },
    },
    '@media print': {
      'html, body': {
        height: 'initial !important',
        overflow: 'initial !important',
      },
      '.page-break-before': {
        marginTop: '1rem',
        display: 'block',
        pageBreakBefore: 'always',
      },
      '.page-break-after': {
        marginTop: '1rem',
        display: 'block',
        pageBreakAfter: 'always',
      },
    },
    '@page': {
      size: 'auto',
      margin: '20mm',
    },

    ...globalRadioButtonStyles,
  },
};

export default styles;
