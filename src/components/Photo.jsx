import PropTypes from 'prop-types';

const Photo = ({ url, alt }) => (
  <li>
    <img
      src={url}
      alt={alt}
    />
  </li>
);

Photo.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string
};

export default Photo;
