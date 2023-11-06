import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import apiKey from "./config";

/* IMPORT APP COMPONENTS */
import SearchForm from "./components/SearchForm";
import MainNav from "./components/MainNav";
import PhotoList from "./components/PhotoList";
import PageNotFound from "./components/PageNotFound";

function App() {

  /* HOOKS */
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("birds");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);

    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setPhotos(responseData.photos.photo);
        {/* Stop loading once the data is received and set to photos */}
        setLoading(false);
      })
      .catch((err) => console.log("Error fetching and parsing data", err));
  }, [query]);


  const handleQueryChange = (searchInput) => {
    setQuery(searchInput);
  };


  return (
    <div className="container">

      {/* Fixed components */}
      <SearchForm changeQuery={handleQueryChange} />
      <MainNav changeQuery={handleQueryChange} />

      {/* on loading, then render routes once data received */}
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate replace to="/birds" />} />
          <Route path="/fish" element={<PhotoList data={photos} changeQuery={handleQueryChange} />} />
          <Route path="/birds" element={<PhotoList data={photos} changeQuery={handleQueryChange} />} />
          <Route path="/flowers" element={<PhotoList data={photos} changeQuery={handleQueryChange} />} />
          <Route path="/:query" element={<PhotoList data={photos} changeQuery={handleQueryChange} />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
