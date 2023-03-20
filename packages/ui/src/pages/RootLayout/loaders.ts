import { LoaderFunction } from 'react-router-dom';

const layoutLoader: LoaderFunction = () => {
  return 'test2';
};

export const loaders = { layoutLoader };
export const actions = {};
