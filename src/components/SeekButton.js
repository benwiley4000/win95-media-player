const React = require('react');
const PropTypes = require('prop-types');
const { playerContextFilter } = require('@cassette/core');

const MediaBtn = require('./MediaBtn');

const icons = {
  fastforward: 'forwardseek',
  rewind: 'backseek'
};

const titles = {
  fastforward: 'Fast Forward',
  rewind: 'Rewind'
};

const now =
  typeof performance !== 'undefined'
    ? performance.now.bind(performance)
    : Date.now.bind(Date);

// 6x speed
const rate = (1 / 1000) * 6;

// only update every 350 milliseconds
const throttleDuration = 350;

class SeekButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleMouseDown = () => {
      // set back by throttle to make sure
      // we update immediately
      let t = now() - throttleDuration;
      const nextFrame = () => {
        const _t = now();
        const dt = _t - t;
        if (dt >= throttleDuration) {
          t = _t;
          this.props.onSeekComplete(this.props.currentTime + rate * dt);
        }
        this.frame = requestAnimationFrame(nextFrame);
      };
      this.frame = requestAnimationFrame(nextFrame);
    };
    this.handleMouseUp = () => {
      cancelAnimationFrame(this.frame);
    };
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frame);
  }

  render() {
    const { type } = this.props;
    return (
      <MediaBtn
        title={titles[type]}
        icon={icons[type]}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseUp}
      />
    );
  }
}

SeekButton.propTypes = {
  currentTime: PropTypes.number.isRequired,
  onSeekComplete: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['fastforward', 'rewind']).isRequired
};

module.exports = playerContextFilter(SeekButton, [
  'currentTime',
  'onSeekComplete'
]);
