import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import apiKey from "./config";

// App components
import SearchForm from "./components/SearchForm";
import MainNav from "./components/MainNav";
import PhotoList from "./components/PhotoList";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("mountains");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let activeFetch = true;

    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((responseData) => {
        if (activeFetch) {
          console.log(responseData.photos.photo);
          setPhotos(responseData.photos.photo);
          setLoading(false);
        }
      })
      .catch((err) => console.log("Error fetching and parsing data", err));
    return () => {
      activeFetch = false;
    };
  }, [query]);

  const handleQueryChange = (searchInput) => {
    setQuery(searchInput);
  };

  return (
    <div className="container">
      <SearchForm changeQuery={handleQueryChange} />
      <MainNav changeQuery={handleQueryChange} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate replace to="/mountains" />} />
          <Route
            path="/:query"
            element={
              <PhotoList data={photos} changeQuery={handleQueryChange} />
            }
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
