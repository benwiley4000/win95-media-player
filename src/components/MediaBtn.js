const React = require('react');
const { Button } = require('react95');

const Icon = require('./Icon');

const normalIconStyle = { opacity: 1 };
const disabledIconStyle = { opacity: 0.3 };

class MediaBtn extends React.PureComponent {
  render() {
    const { icon, title, disabled, ...rest } = this.props;
    const label = title + (disabled ? ' (disabled)' : '');
    return (
      <Button
        disabled={disabled}
        title={label}
        size="sm"
        square
        {...rest}
      >
        <Icon
          name={icon}
          style={disabled ? disabledIconStyle : normalIconStyle}
          alt={label}
        />
      </Button>
    );
  }
}

module.exports = MediaBtn;
