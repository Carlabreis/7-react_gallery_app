import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const MainNav = ({ changeQuery }) => {
  const handleClick = (e) => {
    changeQuery(e.target.innerText)
  }

  return (
    <nav className="main-nav">
        <ul>
          <li><NavLink to='/fish' onClick={(e) => handleClick(e)} >Fish</NavLink></li>
          <li><NavLink to='/birds' onClick={(e) => handleClick(e)} >Birds</NavLink></li>
          <li><NavLink to='/flowers' onClick={(e) => handleClick(e)} >Flowers</NavLink></li>
        </ul>
      </nav>
  )
  }

  MainNav.propTypes = {
    changeQuery: PropTypes.func
  };

export default MainNav