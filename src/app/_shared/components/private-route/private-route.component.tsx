import React from 'react';

type PrivateRouteComponentProps = {
  element: React.FC;
  meta?: Record<string, unknown>;
};

export const PrivateRoute: React.FC<PrivateRouteComponentProps> = ({element: Component, meta, ...rest}) => {
  return (
    <Component {...rest} />
  );
}
