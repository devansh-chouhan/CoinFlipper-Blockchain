import PropTypes from 'prop-types';

export default function Ring({ className }) {
  return (
    <img
      src="../public/images/ringbg.webp"
      alt="Ring"
      className={className}
    />
  )
}

Ring.propTypes = {
  className: PropTypes.string.isRequired
};
