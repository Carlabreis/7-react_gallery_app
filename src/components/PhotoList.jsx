import React from "react";

import Photo from "./Photo";

const PhotoList = () => (
  <div className="photo-container">
    <h2>Results</h2>
    <ul>
      {/* map thru data and render one photo component for each photo */}
      <Photo />
      {/* create NotFound component and render if no results found */}
      <li className="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
      </li>
    </ul>
  </div>
);

export default PhotoList;
