
import { Link, NavLink } from 'react-router'
import { Authcontext } from '../../Context/Authprovider';
import { useCurrentUser,  } from '../../hooks/useAuth';
import { UserDropdown } from './UserDropdown';

export const Navbar = () => {
  // const {user,logout}=useContext(Authcontext)

  const {data}=useCurrentUser()
  
  const user=data?.user
  console.log(user);
 const navElements = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-primary' : 'text-gray-500'
        }
      >
        Home
      </NavLink>
    </li>
 

    {!user ? (
      <>
        <li>
          <NavLink
            to="/SignIn"
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'text-gray-500'
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SignUp"
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'text-gray-500'
            }
          >
            Register
          </NavLink>
        </li>
      </>
    ) : (
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-primary' : 'text-gray-500'
          }
        >
          Jobs
        </NavLink>
      </li>
    )
    
    }

       <li>
      <NavLink
        to=""
        className={({ isActive }) =>
          isActive ? 'text-primary' : 'text-gray-500'
        }
      >
       About Us
      </NavLink>
    </li>
  </>
);

  
  return (
    <div>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {
      navElements
     }
     
      </ul>
    </div>
    <a className="  text-xl font-extrabold">Job <span className='text-r-primary'>Portal</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-sm font-medium text-black">
     {
      navElements
     }
     
    </ul>
  </div>
  <div className="navbar-end">
  <div className='text-sm font-medium'>
    {
      user ? 
      // <Link   
      //  className=''>Logout</Link>

      <UserDropdown user={user}/>
      :
      <Link to="/SignIn"
      className=''>Login</Link>
    }
  </div>
  </div>
</div>
    </div>
  )
}
