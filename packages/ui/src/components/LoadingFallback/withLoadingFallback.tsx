import { FunctionComponent, Suspense } from 'react';
import LoadingFallback from './LoadingFallback';

export default function withLoadingFallback<T extends JSX.IntrinsicAttributes>(
  Component: FunctionComponent<T>,
) {
  const WrappedComponent = (props: T) => (
    <Suspense fallback={<LoadingFallback />}>
      <Component {...props} />
    </Suspense>
  );

  WrappedComponent.displayName = Component.displayName;

  return WrappedComponent;
}
