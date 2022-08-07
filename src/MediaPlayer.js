import React from "react";
import { PlayerContextProvider } from "@cassette/core"
import MediaPlayerUI from "./MediaPlayerUI";


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

export default MediaPlayer;
