const HeaderNav = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    background: 'white',
    alignItems: 'center',
    gap: 6,
    height: '4rem',
    paddingTop: '4',
    paddingBottom: '4',
    paddingX: '16',
    borderBottom: '1px solid',
    borderBottomColor: 'pastels.marianBlue',
    color: 'gray.gray',
    '@media print': {
      display: 'none',
    },
  },
  variants: {},
  defaultProps: {},
};

export default HeaderNav;
