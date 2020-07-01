import { isNil, mergeDeepLeft } from 'ramda';
import { TitleBar as MUITitleBar } from '@cdiscount/backoffice-ui';
import { shape } from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

function TitleBar({ history, location, ...props }) {
  const isNotHome = !isNil(history) && !isNil(location) && location.pathname !== '/';

  const enhancedProps = isNotHome
    ? mergeDeepLeft(props, {
        backButtonProps: {
          onClick: history.goBack,
        },
      })
    : props;

  return <MUITitleBar {...enhancedProps} />;
}

TitleBar.propTypes = {
  history: shape({
    pathname: ReactRouterPropTypes.location.pathname,
  }),
  location: shape({
    goBack: ReactRouterPropTypes.history.goBack,
  }),
};

TitleBar.defaultProps = {
  history: null,
  location: null,
};

export default TitleBar;
