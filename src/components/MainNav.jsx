import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const MainNav = ({ changeQuery }) => {
  const handleClick = (e) => {
    changeQuery(e.target.innerText)
  }

  return (
    <nav className="main-nav">
        <ul>
          <li><NavLink to='/cats' onClick={(e) => handleClick(e)} >Cats</NavLink></li>
          <li><NavLink to='/dogs' onClick={(e) => handleClick(e)} >Dogs</NavLink></li>
          <li><NavLink to='/computers' onClick={(e) => handleClick(e)} >Computers</NavLink></li>
        </ul>
      </nav>
  )
  }

  MainNav.propTypes = {
    changeQuery: PropTypes.func
  };

export default MainNav