import { Link } from "react-router-dom"

function Header() {
   return (
      <nav className="page-header #e65100 orange darken-4">
         <div className="container">
            <div className="nav-wrapper">
               <Link to="/" className="brand-logo">
                  EasyRecipes
               </Link>
               <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                     <Link to="/about">About</Link>
                  </li>
                  <li>
                     <Link to="/contact">Contact</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );  
}
export {Header};
