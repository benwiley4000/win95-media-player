import React from 'react';
import ReactDOM from 'react-dom';

// In a real app:
// import { MediaPlayer } from 'win95-media-player';
import { MediaPlayer } from '../..';

const playlist = [
  {
    url: 'https://archive.org/download/CC1301_windows_95/CC1301_windows_95_512kb.mp4',
    title: 'Computer Chronicles - Windows 95'
  }
];

ReactDOM.render(
  <MediaPlayer
    className="player"
    playlist={playlist}
    showVideo
    fullscreenEnabled
  />,
  document.getElementById('app')
);
