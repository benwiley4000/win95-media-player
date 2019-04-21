const React = require('react');
const PropTypes = require('prop-types');
const {
  PlayerContextConsumer,
  FullscreenContextProvider,
  PlayerPropTypes
} = require('@cassette/core');
const { VideoDisplay } = require('@cassette/components');
const {
  reset,
  themes,
  Window,
  WindowHeader,
  WindowContent,
  Toolbar,
  Button
} = require('react95');
const { ThemeProvider } = require('styled-components');

const audio = require('../icons/audio.png');
const backscroll = require('../icons/backscroll.png');
const backseek = require('../icons/backseek.png');
const backskip = require('../icons/backskip.png');
const eject = require('../icons/eject.png');
const forwardscroll = require('../icons/forwardscroll.png');
const forwardseek = require('../icons/forwardseek.png');
const forwardskip = require('../icons/forwardskip.png');
const pause = require('../icons/pause.png');
const play = require('../icons/play.png');
const selectionend = require('../icons/selectionend.png');
const selectionstart = require('../icons/selectionstart.png');
const stop = require('../icons/stop.png');
const video = require('../icons/video.png');

const MediaBtn = React.memo(({ src, title, onClick }) => {
  return (
    <Button style={{ width: 25, height: 25 }} onClick={onClick}>
      <img src={src} alt={title} title={title} />
    </Button>
  );
});

const filterList = [
  'playlist',
  'activeTrackIndex',
  'paused',
  'onTogglePause',
  'onBackSkip',
  'onForwardSkip'
];

class MediaPlayerUI extends React.Component {
  render() {
    const { playlist, activeTrackIndex, getDisplayText } = this.props;
    return (
      <ThemeProvider theme={themes.default}>
        <PlayerContextConsumer filterList={filterList}>
          {({
            playlist,
            activeTrackIndex,
            paused,
            onTogglePause,
            onBackSkip,
            onForwardSkip
          }) =>
            <Window>
              <WindowHeader>
                {getDisplayText(playlist[activeTrackIndex])}
              </WindowHeader>
              <WindowContent>
                <VideoDisplay />
                <Toolbar>
                  <MediaBtn
                    title={paused ? 'Play' : 'Pause'}
                    src={paused ? play : pause}
                    onClick={onTogglePause}
                  />
                  <MediaBtn title="Stop" src={stop} />
                  <MediaBtn title="Eject" src={eject} />
                  <MediaBtn title="Previous" src={backskip} onClick={onBackSkip} />
                  <MediaBtn title="Rewind" src={backseek} />
                  <MediaBtn title="Fastforward" src={forwardseek} />
                  <MediaBtn title="Next" src={forwardskip} onClick={onForwardSkip} />
                  <MediaBtn title="Start selection" src={selectionstart} />
                  <MediaBtn title="End selection" src={selectionend} />
                </Toolbar>
              </WindowContent>
            </Window>
          }
        </PlayerContextConsumer>
      </ThemeProvider>
    );
  }
}

MediaPlayerUI.propTypes = {
  getDisplayText: PropTypes.func.isRequired,
  showVideo: PropTypes.bool.isRequired,
  fullscreenEnabled: PropTypes.bool.isRequired
};

MediaPlayerUI.defaultProps = {
  getDisplayText(track) {
    if (!track) {
      return '';
    }
    if (track.title && track.artist) {
      return `${track.artist} - ${track.title}`;
    }
    return track.title || track.artist || track.album || '';
  },
  showVideo: false,
  fullscreenEnabled: false
};

module.exports = MediaPlayerUI;
