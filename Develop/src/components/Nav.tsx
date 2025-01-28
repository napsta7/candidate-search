import { NavLink } from 'react-router-dom';

const Nav = () => {
  // ✅TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
      <NavLink 
      to='/'
      className={({ isActive }) => (isActive ? 'active' : '')}>
      Home
      </NavLink>
      <NavLink 
      to='/SavedCandidates'
      className={({ isActive }) => (isActive ? 'active' : '')}>
      Potential Candidates
      </NavLink>
    </div>
  )
};

export default Nav;