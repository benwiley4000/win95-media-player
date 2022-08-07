import React from 'react';
import { themes } from 'react95';

const style = {
  width: 0,
  borderRight: `2px solid ${themes.default.borderLightest}`,
  borderLeft: `2px solid ${themes.default.borderDark}`,
  margin: 0,
  alignSelf: 'stretch',
  marginTop: -4,
  marginBottom: -4
};

const VerticalDivider = () => {
  return <div style={style} />;
};

export default VerticalDivider;
