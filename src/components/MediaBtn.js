const React = require('react');
const { Button } = require('react95');

const Icon = require('./Icon');

const MediaBtn = React.memo(({ icon, title, disabled, ...rest }) => {
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
        style={{ opacity: disabled ? 0.3 : 1 }}
        alt={label}
      />
    </Button>
  );
});

module.exports = MediaBtn;
