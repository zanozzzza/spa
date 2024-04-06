import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { Category } from './pages/category';
import { Recipe } from './pages/recipe';

function NoMatch() {
  let location = useLocation();

  return(
    <div>
      <h1>Oops!</h1>
      <h3>Sorry, an unexpected error has occured.</h3>
      <h5>Does not exist: {location.pathname} </h5>
    </div>
  );
}

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
            <Header />
            <main className="container content">
              <Routes>
                <Route path="*" element={<NoMatch />}></Route>
                <Route path="/" element={<Home />} />
                <Route path="contact/" element={<Contact />}/>
                <Route path="about/" element={<About />}/>
                <Route path="category/:name" element={<Category />} />
                <Route path="meal/:id" element={<Recipe />} />
              </Routes>
            </main>
            <Footer />
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
