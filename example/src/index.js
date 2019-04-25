import React from 'react';
import ReactDOM from 'react-dom';

import { PlayerContextGroup } from '@cassette/core';

import { MediaPlayer } from '../../src';

import videoPlaylist from './videoPlaylist';
import audioPlaylist from './audioPlaylist';

function loadSnapshot(key) {
  let snapshot = localStorage.getItem(key);
  if (snapshot) {
    snapshot = JSON.parse(snapshot);
  }
  return snapshot;
}
const videoStateSnapshot = loadSnapshot('video-state-snapshot');
const audioStateSnapshot = loadSnapshot('audio-state-snapshot');
function saveSnapshot(snapshot, key) {
  localStorage.setItem(key, JSON.stringify(snapshot));
}
function onVideoStateSnapshot(snapshot) {
  saveSnapshot(snapshot, 'video-state-snapshot');
}
function onAudioStateSnapshot(snapshot) {
  saveSnapshot(snapshot, 'audio-state-snapshot');
}

ReactDOM.render(
  <PlayerContextGroup>
    <div className="players-container">
      <MediaPlayer
        playlist={videoPlaylist}
        showVideo
        fullscreenEnabled
        initialStateSnapshot={videoStateSnapshot}
        onStateSnapshot={onVideoStateSnapshot}
        className="player"
      />
      <MediaPlayer
        playlist={audioPlaylist}
        initialStateSnapshot={audioStateSnapshot}
        onStateSnapshot={onAudioStateSnapshot}
        className="player"
      />
    </div>
  </PlayerContextGroup>,
  document.getElementById('app')
);

const exampleCode = document.getElementById('example-code').textContent;

ReactDOM.render(
  <pre>
    <code>{exampleCode}</code>
  </pre>,
  document.getElementById('example-code-display')
);
