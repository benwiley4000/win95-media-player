const React = require('react');
const { MediaProgressBar } = require('@cassette/components');
const { themes } = require('react95');

// based on Cutout styles from react95
const progressContainerStyle = {
  background: 'white',
  height: 10,
  margin: 10,
  borderStyle: 'solid',
  borderWidth: 2,
  borderTopColor: themes.default.borderDark,
  borderLeftColor: themes.default.borderDark,
  borderBottomColor: themes.default.borderLightest,
  borderRightColor: themes.default.borderLightest,
};

class ProgressControl extends React.PureComponent {
  render() {
    return (
      <MediaProgressBar
        progressDirection="right"
        style={progressContainerStyle}
        progressStyle={{ background: 'red' }}
      />
    );
  }
}

module.exports = ProgressControl;
