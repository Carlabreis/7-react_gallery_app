import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import apiKey from './config';

// App components
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoList from './components/PhotoList';

function App() {
  // const [count, setCount] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('sunsets');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let activeFetch = true;

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        if (activeFetch) {
          setPhotos(responseData.photos.photo);
          setLoading(false);
        }
      })
      .catch(err => console.log("Error fetching and parsing data", err))
  }, [query]);

  return (
    <div className='container'>
      <SearchForm />
      <MainNav />
      <Routes>
        <Route path="/" element={<PhotoList />} />
        <Route path="/cats" element={<PhotoList />} />
        <Route path="/dogs" element={<PhotoList />} />
        <Route path="/computers" element={<PhotoList />} />
        <Route path="/search/:query" element={<PhotoList />} />
      </Routes>
    </div>
  )
}

export default App
