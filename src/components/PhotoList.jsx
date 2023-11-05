import React from "react";

import Photo from "./Photo";
import NoPhotos from "./NoPhotos";

const PhotoList = props => {
  const results = props.data;
  let photos;

  {/* map thru data and render one photo component for each photo */}
  if (results.length > 0) {
    photos = results.map(image => <Photo key={image.id} url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt={`${image.title}`} />);
  } else {
    {/* create NotFound component and render if no results found */}
      photos = <NoPhotos />
  }

  return (
    <div className="photo-container">
    <h2>Results</h2>
    <ul>
      {photos}
    </ul>
  </div>
  )
};

//propTypes

export default PhotoList;
