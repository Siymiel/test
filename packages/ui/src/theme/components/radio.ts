export const globalRadioButtonStyles = {
  '.chakra-radio': {
    position: 'relative',
    zIndex: '1',
    '.chakra-radio__control': {
      h: '1.25rem',
      w: '1.25rem',
      pos: 'relative',
      borderColor: 'gray.dark',
      _after: {
        content: '""',
        position: 'absolute',
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: 'full',
        bgColor: 'transparent',
        zIndex: '-1',
      },
    },
    '.chakra-radio__control[data-hover]': {
      _after: {
        bgColor: 'gray.bg',
      },
    },
    '.chakra-radio__control[data-checked]': {
      bgColor: 'white',
      borderColor: 'primary.raspberry',
      _before: {
        bgColor: 'primary.raspberry',
        h: '0.625rem',
        w: '0.625rem',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
    '.chakra-radio__control[data-checked]:hover': {
      bgColor: 'transparent',
      borderColor: 'primary.raspberry',
    },
    '.chakra-radio__control[data-focus]': {
      boxShadow: 'none',
      _after: {
        bgColor: 'pastels.paleCherry',
      },
    },
    '.chakra-radio__label': {
      marginInlineStart: '0.875rem',
    },
  },
};
