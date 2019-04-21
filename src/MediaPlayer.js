const React = require('react');
const PropTypes = require('prop-types');
const { PlayerContextProvider } = require('@cassette/core');

const MediaPlayerUI = require('./MediaPlayerUI');

class MediaPlayer extends React.Component {
  render() {
    const {
      getDisplayText,
      showVideo,
      fullscreenEnabled,
      ...rest
    } = this.props;
    return (
      <PlayerContextProvider {...rest}>
        <MediaPlayerUI
          getDisplayText={getDisplayText}
          showVideo={showVideo}
          fullscreenEnabled={fullscreenEnabled}
        />
      </PlayerContextProvider>
    );
  }
}

module.exports = MediaPlayer;
