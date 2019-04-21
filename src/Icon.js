const React = require('react');
const PropTypes = require('prop-types');

const imgs = {
  audio: require('./icons/audio.png'),
  backscroll: require('./icons/backscroll.png'),
  backseek: require('./icons/backseek.png'),
  backskip: require('./icons/backskip.png'),
  eject: require('./icons/eject.png'),
  forwardscroll: require('./icons/forwardscroll.png'),
  forwardseek: require('./icons/forwardseek.png'),
  forwardskip: require('./icons/forwardskip.png'),
  pause: require('./icons/pause.png'),
  play: require('./icons/play.png'),
  selectionend: require('./icons/selectionend.png'),
  selectionstart: require('./icons/selectionstart.png'),
  stop: require('./icons/stop.png'),
  video: require('./icons/video.png'),
  maximize: require('./icons/maximize.png'),
  minimize: require('./icons/minimize.png'),
  unmaximize: require('./icons/unmaximize.png'),
  x: require('./icons/x.png')
};

const Icon = React.memo(({ name, ...rest }) => {
  return <img {...rest} src={imgs[name]} />;
});

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

module.exports = Icon;
