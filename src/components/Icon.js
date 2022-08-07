import React from "react";
import PropTypes from 'prop-types';

import audio from '../icons/audio.png';
import backscroll from '../icons/backscroll.png';
import backseek from '../icons/backseek.png';
import backskip from '../icons/backskip.png';
import eject from '../icons/eject.png';
import forwardscroll from '../icons/forwardscroll.png';
import forwardseek from '../icons/forwardseek.png';
import forwardskip from '../icons/forwardskip.png';
import pause from '../icons/pause.png';
import play from '../icons/play.png';
import selectionend from '../icons/selectionend.png';
import selectionstart from '../icons/selectionstart.png';
import stop from '../icons/stop.png';
import video from '../icons/video.png';
import maximize from '../icons/maximize.png';
import minimize from '../icons/minimize.png';
import unmaximize from '../icons/unmaximize.png';
import x from '../icons/x.png';

const imgs = {
  audio,
  backscroll,
  backseek,
  backskip,
  eject,
  forwardscroll,
  forwardseek,
  forwardskip,
  pause,
  play,
  selectionend,
  selectionstart,
  stop,
  video,
  maximize,
  minimize,
  unmaximize,
  x,
};

class Icon extends React.PureComponent {
  render() {
    const { name, ...rest } = this.props;
    return <img {...rest} src={imgs[name]} />;
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
