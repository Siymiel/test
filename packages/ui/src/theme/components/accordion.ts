import type { ComponentMultiStyleConfig } from '@chakra-ui/theme';

const Accordion: ComponentMultiStyleConfig = {
  parts: ['root', 'container', 'button', 'panel', 'icon'],
  baseStyle: {},
  variants: {
    checkboxAccordion: {
      wrapper: {
        border: '1px solid',
        borderRadius: '8px',
        borderColor: 'gray.border',
        transition: 'border-color 0.2s ease-in-out',
      },
      expandedWrapper: {
        borderColor: 'primary.raspberry',
        bg: 'rgba(247, 232, 243, 0.3)',
      },
      container: {
        border: 'none',
      },
      button: {
        p: 4,
        _hover: {
          bg: 'rgba(247, 232, 243, 0.3)',
        },
        _focus: {
          boxShadow: 'none',
        },
        _expanded: {
          _hover: {
            bg: 'transparent',
          },
        },
      },
      panel: {
        px: 4,
        pt: 0,
        pb: 4,
      },
    },
  },
};

export default Accordion;
