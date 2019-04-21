const React = require('react');
const PropTypes = require('prop-types');
const { playerContextFilter, PlayerPropTypes } = require('@cassette/core');
const { VideoDisplay } = require('@cassette/components');
const {
  themes,
  Window,
  WindowHeader,
  WindowContent,
  Toolbar,
  Button,
  Cutout
} = require('react95');
const { ThemeProvider } = require('styled-components');

const MediaBtn = require('./MediaBtn');
const SeekButton = require('./SeekButton');
const Icon = require('./Icon');
const convertToTime = require('./convertToTime');

const windowHeaderStyle = {
  padding: 0,
  height: 'initial',
  lineHeight: '1.4em'
};
const headerToolbarStyle = {
  padding: 0
};
const windowContentStyle = {
  padding: 0,
  marginRight: 2
};

const Spacer = () => <div style={{ width: 8 }} />;

class MediaPlayerView extends React.PureComponent {
  render() {
    const {
      getDisplayText,
      showVideo,
      fullscreenEnabled,
      className,
      style,
      fullscreen,
      requestFullscreen,
      requestExitFullscreen,
      playlist,
      activeTrackIndex,
      paused,
      currentTime,
      onTogglePause,
      onBackSkip,
      onForwardSkip,
      onSeekPreview,
      onSeekComplete
    } = this.props;
    return (
      <ThemeProvider theme={themes.default}>
        <Window style={{ ...style, fontSize: 13 }} className={className}>
          <WindowHeader style={windowHeaderStyle}>
            <Toolbar style={headerToolbarStyle}>
              &nbsp;
              <Icon name={showVideo ? 'video' : 'audio'} />
              &nbsp;
              <span>
                {getDisplayText(playlist[activeTrackIndex])}
                &nbsp;
                ({paused ? 'paused' : 'playing'})
              </span>
            </Toolbar>
          </WindowHeader>
          <Toolbar style={{ ...headerToolbarStyle, position: 'relative' }}>
            {['File', 'Edit', 'Device', 'Scale', 'Help'].map(menuHeader =>
              <Button
                key={menuHeader}
                style={{ fontSize: 13, height: '1.6em' }}
                size="sm"
                flat
                disabled
              >
                <span style={{ textDecoration: 'underline' }}>
                  {menuHeader[0]}
                </span>
                {menuHeader.slice(1)}
              </Button>
            )}
          </Toolbar>
          <WindowContent style={windowContentStyle}>
            {showVideo && <VideoDisplay />}
            <Toolbar>
              <MediaBtn
                title={paused ? 'Play' : 'Pause'}
                icon={paused ? 'play' : 'pause'}
                onClick={onTogglePause}
              />
              <MediaBtn title="Stop" icon="stop" disabled />
              <MediaBtn title="Eject" icon="eject" disabled />
              <Spacer />
              <MediaBtn title="Previous" icon="backskip" onClick={onBackSkip} />
              <SeekButton type="rewind" />
              <SeekButton type="fastforward" />
              <MediaBtn
                title="Next"
                icon="forwardskip"
                onClick={onForwardSkip}
              />
              <Spacer />
              <MediaBtn
                title="Start Selection"
                icon="selectionstart"
                disabled
              />
              <MediaBtn
                title="End Selection"
                icon="selectionend"
                disabled
              />
              <Spacer />
              <Cutout shadow={false} style={{ flexGrow: 1 }}>
                <span style={{ marginLeft: 2 }}>
                  {convertToTime(currentTime)}
                </span>
              </Cutout>
            </Toolbar>
          </WindowContent>
        </Window>
      </ThemeProvider>
    );
  }
}

MediaPlayerView.propTypes = {
  getDisplayText: PropTypes.func.isRequired,
  showVideo: PropTypes.bool.isRequired,
  fullscreenEnabled: PropTypes.bool.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  fullscreen: PropTypes.bool.isRequired,
  requestFullscreen: PropTypes.func.isRequired,
  requestExitFullscreen: PropTypes.func.isRequired,
  playlist: PropTypes.arrayOf(PlayerPropTypes.track.isRequired).isRequired,
  activeTrackIndex: PropTypes.number.isRequired,
  paused: PropTypes.bool.isRequired,
  onTogglePause: PropTypes.func.isRequired,
  onBackSkip: PropTypes.func.isRequired,
  onForwardSkip: PropTypes.func.isRequired
};

module.exports = playerContextFilter(
  MediaPlayerView,
  [
    'fullscreen',
    'requestFullscreen',
    'requestExitFullscreen',
    'playlist',
    'activeTrackIndex',
    'paused',
    'currentTime',
    'onSeekPreview',
    'onSeekComplete',
    'onTogglePause',
    'onBackSkip',
    'onForwardSkip'
  ]
);
