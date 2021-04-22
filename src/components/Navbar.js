import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center container mx-auto py-4">
        <div className="text-3xl">
          Pomato
        </div>
        <NavLink to="/">App</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
    // <nav>
    //   Pomato
    //   <ul>
    //     <li>
    //       <NavLink to="/">App</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/settings">Settings</NavLink>
    //     </li>
    //   </ul>
    // </nav>
  )
}

export default Navbar;