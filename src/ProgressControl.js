const React = require('react');
const { MediaProgressBar } = require('@cassette/components');
const { themes, Button } = require('react95');

// based on Cutout styles from react95
const progressContainerStyle = {
  background: 'white',
  height: 13,
  margin: 10,
  borderStyle: 'solid',
  borderWidth: 2,
  borderTopColor: themes.default.borderDark,
  borderLeftColor: themes.default.borderDark,
  borderBottomColor: themes.default.borderLightest,
  borderRightColor: themes.default.borderLightest,
};

const handle = (
  <div style={{ position: 'relative', top: 1 }}>
    <div
      style={{
        width: 12,
        height: 18,
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: themes.default.material,
        borderTopColor: themes.default.borderLightest,
        borderLeftColor: themes.default.borderLightest,
        borderRightColor: themes.default.borderDark,
        borderBottomWidth: 0
      }}
    />
    <div
      style={{
        width: 8,
        height: 8,
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: themes.default.material,
        borderTopWidth: 0,
        borderLeftColor: themes.default.borderLightest,
        borderBottomColor: themes.default.borderDark,
        borderRightWidth: 0,
        transform: 'rotate(-45deg) translateX(-50%)',
        position: 'relative',
        left: 5,
        top: -6
      }}
    />
  </div>
);

class ProgressControl extends React.PureComponent {
  render() {
    return (
      <MediaProgressBar
        handle={handle}
        progressDirection="right"
        style={progressContainerStyle}
      />
    );
  }
}

module.exports = ProgressControl;
