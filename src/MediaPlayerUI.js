const React = require('react');
const PropTypes = require('prop-types');
const { FullscreenContextProvider } = require('@cassette/core');

const MediaPlayerView = require('./components/MediaPlayerView');

class MediaPlayerUI extends React.PureComponent {
  render() {
    const {
       getDisplayText,
       showVideo,
       fullscreenEnabled,
       className,
       style
     } = this.props;
    return (
      <FullscreenContextProvider fullscreenEnabled={fullscreenEnabled}>
        <MediaPlayerView
          getDisplayText={getDisplayText}
          showVideo={showVideo}
          fullscreenEnabled={fullscreenEnabled}
          className={className}
          style={style}
        />
      </FullscreenContextProvider>
    );
  }
}

MediaPlayerUI.propTypes = {
  getDisplayText: PropTypes.func.isRequired,
  showVideo: PropTypes.bool.isRequired,
  fullscreenEnabled: PropTypes.bool.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

MediaPlayerUI.defaultProps = {
  getDisplayText(track) {
    if (!track) {
      return '';
    }
    return track.title || track.artist || track.album || '';
  },
  showVideo: false,
  fullscreenEnabled: false
};

module.exports = MediaPlayerUI;
