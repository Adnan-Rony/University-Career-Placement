import React, { useContext } from "react";
import { Authcontext } from "../../Context/Authprovider";

export const ResponsiveNav = () => {
  const { user, logout } = useContext(Authcontext);
  // console.log(user);
  const routes = [
    { id: 1, route: "Home", path: "/" },
    { id: 2, route: "About", path: "/about" },
    { id: 3, route: "Services", path: "/services" },
    { id: 4, route: "Contact", path: "/contact" },
    { id: 5, route: "Profile", path: "/profile/:id" },
  ];

  // console.log(routes);

  return (
    <nav className="text-black md:flex mr">
      {routes.map((route) => (
        <Links route={route}></Links>
      ))}
      {/* <h1>{user}</h1> */}
      <div>
        <div>
          {user ? (
            <button onClick={logout} className="btn btn-primary">
              Logout
            </button>
          ) : (
            <button onClick={logout} className="btn btn-primary">
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

function Links({ route }) {
  return (
    <div>
      <li className="list-none mr-3" key={route.id}>
        {route.route}
      </li>
    </div>
  );
}
