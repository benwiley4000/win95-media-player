const React = require('react');
const { PlayerContextProvider } = require('@cassette/core');

const MediaPlayerUI = require('./MediaPlayerUI');

class MediaPlayer extends React.Component {
  render() {
    const {
      getDisplayText,
      showVideo,
      fullscreenEnabled,
      className,
      style,
      ...rest
    } = this.props;
    return (
      <PlayerContextProvider {...rest}>
        <MediaPlayerUI
          getDisplayText={getDisplayText}
          showVideo={showVideo}
          fullscreenEnabled={fullscreenEnabled}
          className={className}
          style={style}
        />
      </PlayerContextProvider>
    );
  }
}

MediaPlayer.propTypes = {
  ...MediaPlayerUI.propTypes,
  ...PlayerContextProvider.propTypes
};

MediaPlayer.defaultProps = {
  ...MediaPlayerUI.defaultProps,
  ...PlayerContextProvider.defaultProps
};

module.exports = MediaPlayer;
