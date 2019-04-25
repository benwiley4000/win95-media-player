const React = require('react');
const PropTypes = require('prop-types');
const { playerContextFilter } = require('@cassette/core');

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

const tickMark = <div style={{ height: 10, overflow: 'hidden' }}>|</div>;

const ProgressRuler = React.memo(({ progressWidth, duration }) => {
  // save the width-over-time ratio (we'll need it for math)
  const widthOverTime = progressWidth / duration;

  // compute the minimum suitable time interval for ruler tick
  // marks so labels won't overlap with each other
  let interval;
  {
    let i = 0;
    do {
      interval = intervalsInSeconds[i++];
    } while (
      i < intervalsInSeconds.length &&
      interval * widthOverTime < minWidthForTickInterval
    );
  }

  // compute a list of times at which we'll render tick marks,
  // and determine if the label for each should be visible
  // (normally we will show all labels but the second-to-last)
  const ticks = [{ time: 0, showLabel: true }];
  {
    for (let time = interval; time < duration; time += interval) {
      ticks.push({ time, showLabel: true });
    }
    const last = ticks[ticks.length - 1];
    if (last.time < duration) {
      if (last.time > 0) {
        last.showLabel = false;
      }
      ticks.push({ time: duration, showLabel: true });
    }
  }

  return ticks.map(({ time, showLabel }, index) => {
    // we want to render 3 digits regardless of the size of the number,
    // so smaller numbers will have more decimal places. if the number
    // is over 1000 then we'll have to use 4 digits or more. because
    // we are rendering second counts, this is actually going to be
    // common for longer clips (something that wasn't even a thought
    // when Windows 95 was developed, most likely).
    const label = showLabel
      ? time.toFixed(Math.max(0, 3 - Math.floor(time).toString().length))
      : '';

    return (
      <div
        key={`${time}-${index}`}
        style={{
          position: 'absolute',
          left: time * widthOverTime,
        }}
      >
        {tickMark}
        <div style={{ position: 'relative', left: -2 }}>{label}</div>
      </div>
    );
  });
});

ProgressRuler.propTypes = {
  duration: PropTypes.number.isRequired,
  progressWidth: PropTypes.number.isRequired
};

module.exports = playerContextFilter(ProgressRuler, ['duration']);
