const React = require('react');
const { themes } = require('react95');

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

module.exports = VerticalDivider;
