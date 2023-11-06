import { NavLink } from "react-router-dom";

const MainNav = () => {

  return (
    <nav className="main-nav">
        <ul>
          <li><NavLink to='/fish' >Fish</NavLink></li>
          <li><NavLink to='/birds' >Birds</NavLink></li>
          <li><NavLink to='/flowers' >Flowers</NavLink></li>
        </ul>
      </nav>
  )
  }

export default MainNav;