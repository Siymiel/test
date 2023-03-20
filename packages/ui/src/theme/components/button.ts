import type { ComponentStyleConfig } from '@chakra-ui/theme';
const roundButtonBase = {
  borderRadius: 'full',
  color: 'gray.dark',
  textStyle: 'small',
  fontWeight: 400,
  _disabled: {
    bgColor: 'gray.white',
    color: 'gray.dark',
  },
};

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: '500',
    borderRadius: 'base',
    _hover: {
      textDecor: 'none',
    },
    _disabled: {
      pointerEvents: 'none',
    },
    _focus: {
      boxShadow: '0px 0px 8px rgba(175, 22, 133, 0.5)',
    },
  },
  sizes: {
    square: {
      w: '2.5rem',
      h: '2.5rem',
    },
    chips: {
      h: 9,
      py: 2,
      px: 4,
    },
    sm: {
      height: '3rem',
      px: 6,
      py: 3,
      fontSize: '1rem',
      textStyle: 'ctaRegular',
    },
    round: {
      height: '2.5rem',
      width: '2.5rem',
    },
    xl: {
      height: 14,
      textStyle: 'ctaRegular',
      px: 6,
      py: 4,
    },
    roundSm: {
      w: 7,
      h: 7,
    },
    roundXs: {
      h: 6,
      w: 6,
    },
    roundMd: {
      h: 8,
      w: 8,
    },
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
    },
    solid: {
      bg: 'primary.raspberry',
      color: 'white',
      _hover: {
        bg: '#D81BA4',
        boxShadow: '0px 4px 16px rgba(216, 27, 164, 0.6)',
      },
      _active: {
        bg: 'primary.purple',
      },
      _disabled: {
        opacity: 0.25,
      },
    },
    secondary: {
      border: '1px solid',
      borderColor: 'gray.border',
      borderRadius: '3px',
      _hover: {
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
      },
      _active: {
        bgColor: 'gray.bg',
      },
      _disabled: {
        color: 'rgba(gray.dark, 0.25)',
      },
    },
    tertiary: {
      border: '1px solid',
      borderColor: 'gray.bg',
      bg: 'gray.bg',
      borderRadius: '4px',
      color: 'gray.dark',
      _hover: {
        borderColor: 'gray.border',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
      },
      _active: {
        bg: 'gray.light',
      },
      _disabled: {
        bg: 'gray.bg',
        color: 'rgba(gray.dark, 0.25)',
      },
    },
    tabactive: {
      border: '1px solid',
      bg: 'pastels.marianBlue',
      borderColor: 'gray.border',
      borderRadius: '3px',
      color: 'primary.blue',
    },

    round: {
      ...roundButtonBase,
      bgColor: 'gray.bg',
      _hover: {
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
      },
      _active: {
        bgColor: 'gray.bg',
      },
    },
    roundRaspberry: {
      bgColor: 'primary.raspberry',
      ...roundButtonBase,
    },
    roundNav: {
      ...roundButtonBase,
      bgColor: 'gray.light',
      _hover: {
        bgColor: 'gray.border',
      },
      _active: {
        bgColor: 'pastels.marianBlue',
        color: 'primary.blue',
      },
    },
    roundActive: {
      ...roundButtonBase,
      bgColor: 'gray.light',
      _before: {
        content: '""',
        borderRadius: 'full',
        top: '0',
        right: '0',
        pos: 'absolute',
        boxSize: '12px',
        bgColor: 'primary.magenta',
      },
      _hover: {
        bgColor: 'gray.border',
      },
      _active: {
        bgColor: 'pastels.marianBlue',
        color: 'primary.blue',
      },
    },
    roundGray: {
      width: '1rem',
      height: '2.5rem',
      borderRadius: 'full',
      _hover: {
        bgColor: 'gray.bg',
      },
    },
    roundTransparent: {
      bgColor: 'transparent',
      borderRadius: '50%',
      _hover: {
        bgColor: 'pastels.paleCherry',
      },
    },
    icon: {
      borderRadius: 0,
      bgColor: 'transparent',
      _hover: {
        bgColor: 'gray.bg',
      },
      _first: {
        borderRight: '1px',
        borderColor: 'gray.border',
      },
    },
    landing: {
      minW: '27.5rem',
      bg: 'rgba(248, 248, 248, 0.1)',
      color: 'gray.white',
    },
    navLink: {
      color: 'primary.blue',
      p: '0',
      height: 'none',
      _hover: {
        color: 'primary.midnightBlue',
      },
      _focus: {
        boxShadow: 'none',
        outline: 'revert',
      },
    },
    roundAlert: {
      bg: 'transparent',
      color: 'gray.gray',
      borderRadius: '50%',
      _hover: {
        bg: 'gray.bg',
        color: 'secondary.red',
      },
      _focus: {
        bg: 'pastels.paleCherry',
        boxShadow: 'none',
        color: 'secondary.red',
      },
    },
    landingBtn: {
      size: 'sm',
      bg: 'rgba(248, 248, 248, 0.1)',
      color: 'gray.white',
      mt: 8,
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'sm',
    variant: 'solid',
  },
};

export default Button;
