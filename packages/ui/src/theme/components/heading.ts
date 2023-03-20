import textStyles from '../foundations/text-styles';

const Heading = {
  baseStyle: {
    fontWeight: '700',
  },
  variants: {
    capitalizeHeading: {
      textTransform: 'capitalize',
    },
  },
  sizes: {
    h1: {
      fontSize: ['2rem'],
      lineHeight: '1.25',
    },
    h2: {
      fontSize: ['1.625rem'],
      lineHeight: '1.19',
    },
    h3: {
      fontSize: ['1.375rem'],
      lineHeight: '1.27',
    },
    h4: {
      fontSize: ['1.125rem'],
      lineHeight: '1.38',
    },
    h5: {
      fontSize: ['1.125rem'],
      lineHeight: '1.38',
      fontWeight: '400',
    },
    h6: {
      fontSize: ['1rem'],
      lineHeight: '1.5',
      fontWeight: '700',
    },
    eyebrow: {
      ...textStyles.eyeBrow,
    },
  },
};

export default Heading;
