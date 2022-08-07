import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'react95';
import Icon from './Icon';

const normalIconStyle = { opacity: 1 };
const disabledIconStyle = { opacity: 0.3 };

class MediaBtn extends React.PureComponent {
  render() {
    const { icon, title, disabled, ...rest } = this.props;
    const label = title + (disabled ? ' (disabled)' : '');
    return (
      <Button disabled={disabled} title={label} size="sm" square {...rest}>
        <Icon
          name={icon}
          style={disabled ? disabledIconStyle : normalIconStyle}
          alt={label}
        />
      </Button>
    );
  }
}

MediaBtn.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

MediaBtn.defaultProps = {
  disabled: false
};

export default MediaBtn;
