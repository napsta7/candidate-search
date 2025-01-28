import { NavLink } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
      <div className = 'navSelect'>
      <NavLink /*NavLink is used to navigate between the Home and Potential Candidates page.*/
      to='/'
      className={({ isActive }) => (isActive ? 'active' : '')/*Nav link becomes bold whenever the user is on that page.*/}>
      Home
      </NavLink>
      </div>
      <div className = 'navSelect'>
      <NavLink 
      to='/SavedCandidates'
      className={({ isActive }) => (isActive ? 'active' : '')}>
      Potential Candidates
      </NavLink>
      </div>
    </div>
  )
};

export default Nav;