import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types';


import Photo from "./Photo";
import NoPhotos from "./NoPhotos";

const PhotoList = ({ data, changeQuery }) => {
  let { query } = useParams();
  let photos;

  useEffect(() => {
    changeQuery(query);
  });

  if (data.length > 0) {
    photos = data.map((image) => (
      <Photo
        key={image.id}
        url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
        alt={image.title}
      />
    ));
  } else {
    photos = <NoPhotos />;
  }

  return (
    <div className="photo-container">
      <h2>{query}</h2>
      <ul>{photos}</ul>
    </div>
  );
};

PhotoList.propTypes = {
  data: PropTypes.array,
  changeQuery: PropTypes.func
};

export default PhotoList;
