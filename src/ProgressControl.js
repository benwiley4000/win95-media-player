const React = require('react');
const { MediaProgressBar } = require('@cassette/components');
const { playerContextFilter } = require('@cassette/core');
const { themes } = require('react95');
const ResizeObserver = require('resize-observer-polyfill').default;

import MediaBtn from './MediaBtn';

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

// the minimum horizontal pixel space needed to print a time label
const minWidthForTickInterval = 30;

const intervalsInSeconds = [
  0.1,
  0.25,
  0.5,
  1,
  2,
  5,
  10,
  15,
  30,
  // 1 minute
  1 * 60,
  2 * 60,
  5 * 60,
  10 * 60,
  15 * 60,
  // 1 hour
  1 * 60 * 60,
  2 * 60 * 60,
  5 * 60 * 60,
  10 * 60 * 60,
  15 * 60 * 60,
  // 30 hours... hopefully we don't need more than that haha
  30 * 60 * 60
];

function findIdealInterval(progressWidth, trackDuration) {
  const ratio = progressWidth / trackDuration;
  let i = 0;
  let interval;
  do {
    interval = intervalsInSeconds[i++];
  } while (
    i < intervalsInSeconds.length &&
    interval * ratio < minWidthForTickInterval
  );
  return interval;
}

function getTicks(progressWidth, trackDuration) {
  const ticks = [];
  const interval = findIdealInterval(progressWidth, trackDuration);
  for (let time = 0; time < trackDuration; time += interval) {
    ticks.push({ time, label: true });
  }
  const last = ticks[ticks.length - 1];
  if (last.time < trackDuration) {
    if (last.time > 0) {
      last.label = false;
    }
    ticks.push({ time: trackDuration, label: true });
  }
  return ticks;
}

class ProgressControl extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      progressWidth: 0,
      ticks: [
        { time: 0, label: true },
        { time: props.duration, label: true }
      ]
    };
    this.handleScrollForward = () => {
      this.props.onSeekComplete(this.props.currentTime + scrollInterval);
    };
    this.handleScrollBackward = () => {
      this.props.onSeekComplete(this.props.currentTime - scrollInterval);
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

  componentDidUpdate(prevProps, prevState) {
    const { duration } = this.props;
    const { progressWidth } = this.state;
    if (
      duration !== prevProps.duration ||
      progressWidth !== prevState.progressWidth
    ) {
      this.setState({
        ticks: getTicks(progressWidth, duration)
      });
    }
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect();
  }

  render() {
    const { duration } = this.props;
    const { ticks, progressWidth } = this.state;
    const ratio = progressWidth / duration;
    return (
      <div style={{ display: 'flex' }}>
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
            {ticks.map(({ time, label }, index) => {
              return (
                <div
                  key={time + '-' + index}
                  style={{
                    position: 'absolute',
                    left: time * ratio,
                  }}
                >
                  <div style={{ height: 10, overflow: 'hidden' }}>|</div>
                  <div style={{ position: 'relative', left: -2 }}>
                    {label &&
                      time.toFixed(Math.max(0, 3 - Math.floor(time).toString().length))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
  ['currentTime', 'duration', 'onSeekComplete']
);
