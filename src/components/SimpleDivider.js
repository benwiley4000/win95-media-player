import React from 'react';
import { themes } from 'react95';

const style = {
  height: 0,
  borderBottom: `1px solid ${themes.default.borderLightest}`,
  margin: 0
};

const SimpleDivider = () => {
  return <hr style={style} />;
};

module.exports = SimpleDivider;
