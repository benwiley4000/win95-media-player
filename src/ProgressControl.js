const React = require('react');
const { MediaProgressBar } = require('@cassette/components');
const { playerContextFilter } = require('@cassette/core');
const { themes } = require('react95');

import MediaBtn from './MediaBtn';

// based on Cutout styles from react95
const progressContainerStyle = {
  flexGrow: 1,
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

const scrollButtonContainerStyle = {
  marginTop: 10,
  marginRight: '1.3rem',
  marginLeft: '0.3rem',
  display: 'flex'
};

const scrollButtonStyle = {
  width: 11,
  height: 13
};

const scrollInterval = 1 / 30;

class ProgressControl extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleScrollForward = () => {
      this.props.onSeekComplete(this.props.currentTime + scrollInterval);
    };
    this.handleScrollBackward = () => {
      this.props.onSeekComplete(this.props.currentTime - scrollInterval);
    };
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <MediaProgressBar
          handle={handle}
          progressDirection="right"
          style={progressContainerStyle}
        />
        <div style={scrollButtonContainerStyle}>
          <MediaBtn
            title="Scroll Backward"
            icon="backscroll"
            style={scrollButtonStyle}
            onClick={this.handleScrollBackward}
          />
          <MediaBtn
            title="Scroll Forward"
            icon="forwardscroll"
            style={scrollButtonStyle}
            onClick={this.handleScrollForward}
          />
        </div>
      </div>
    );
  }
}

module.exports = playerContextFilter(
  ProgressControl,
  ['currentTime', 'onSeekComplete']
);
