const React = require('react');
const { Button } = require('react95');

const Icon = require('./Icon');

const MediaBtn = React.memo(({ icon, title, ...rest }) => {
  return (
    <Button title={title} size="sm" square {...rest}>
      <Icon
        name={icon}
        style={{ opacity: rest.disabled ? 0.3 : 1 }}
        alt={title}
      />
    </Button>
  );
});

module.exports = MediaBtn;
