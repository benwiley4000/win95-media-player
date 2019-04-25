const React = require('react');
const { MediaProgressBar } = require('@cassette/components');
const { themes } = require('react95');
const ResizeObserver = require('resize-observer-polyfill').default;

const ProgressRuler = require('./ProgressRuler');

const progressMargin = 10;

// based on Cutout styles from react95
const progressContainerStyle = {
  background: 'white',
  height: 13,
  margin: progressMargin,
  marginBottom: 0,
  borderStyle: 'solid',
  borderWidth: 2,
  borderTopColor: themes.default.borderDark,
  borderLeftColor: themes.default.borderDark,
  borderBottomColor: themes.default.borderLightest,
  borderRightColor: themes.default.borderLightest,
  boxSizing: 'border-box'
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
        borderBottomWidth: 0,
        boxSizing: 'border-box'
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
        top: -6,
        boxSizing: 'border-box'
      }}
    />
  </div>
);

class ProgressBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      progressWidth: 0
    };
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries, observer) => {
      this.setState({
        progressWidth: entries[0].contentRect.width - progressMargin * 2
      });
    });
    this.resizeObserver.observe(this.progressBox);
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect();
  }

  render() {
    const { progressWidth } = this.state;
    return (
      <div
        ref={elem => this.progressBox = elem}
        style={{ flexGrow: 1 }}
      >
        <MediaProgressBar
          handle={handle}
          progressDirection="right"
          style={progressContainerStyle}
        />
        <div
          style={{
            position: 'relative',
            height: 30,
            marginLeft: progressMargin,
            marginRight: progressMargin
          }}
        >
          <ProgressRuler progressWidth={this.state.progressWidth} />
        </div>
      </div>
    );
  }
}

module.exports = ProgressBar;
