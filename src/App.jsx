import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import apiKey from './config';

// App components
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoList from './components/PhotoList';

function App() {
  const [count, setCount] = useState(0)

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
