import { useEffect } from "react";
import PropTypes from "prop-types";

import Photo from "./Photo";
import NoPhotos from "./NoPhotos";

const BirdsPhotoList = ({ data, changeQuery }) => {
  let photos;
  let birds = "birds";

  useEffect(() => {
    changeQuery(birds);
  });

  if (data.length > 0) {
    photos = data.map((image) => {
      if (!image.id || !image.farm || !image.server || !image.secret) {
        return (
          <Photo
            key={Math.random()}
            url="https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
            alt="image not found"
          />
        );
      } else {
        return (
          <Photo
            key={image.id}
            url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
            alt={image.title}
          />
        );
      }
    });
  } else {
    photos = <NoPhotos />;
  }

  return (
    <div className="photo-container">
      <h2>Birds</h2>
      <ul>{photos}</ul>
    </div>
  );
};

BirdsPhotoList.propTypes = {
  data: PropTypes.array.isRequired,
  changeQuery: PropTypes.func
};

export default BirdsPhotoList;
