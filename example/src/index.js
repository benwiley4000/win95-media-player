import React from 'react';
import ReactDOM from 'react-dom';

import obj from '../..';

import playlist from './playlist';

ReactDOM.render(
  <obj.MediaPlayer playlist={playlist} showVideo fullscreenEnabled />,
  document.getElementById('app')
);
