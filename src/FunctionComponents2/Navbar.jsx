import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Navbar(props) {
  let [search, setSearch] = useState("");
  let [searchParams,setSearchParams] = useSearchParams()

  function postSearch(e) {
    e.preventDefault();
    props.getSearch(search);
  }
  
  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to={`/?q=All&language=${search.get("language")??"hi"}`}>
            New App
          </Link>
          <Link
            className="navbar-toggler"
            type="Link"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list text-light fs-1"></i>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link 
                  className="nav-link text-light active"
                  aria-current="page"
                  to={`/?q=All&language=${searchParams.get("language")??"hi"}`}
                >
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=Politics&language=${searchParams.get("language")??"hi"}`}>
                  Politics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=Crime&language=${searchParams.get("language")??"hi"}`}>
                  Crime
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=Education&language=${searchParams.get("language")??"hi"}`}>
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=Science&language=${searchParams.get("language")??"hi"}`}>
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=Technology&language=${searchParams.get("language")??"hi"}`}>
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=Sports&language=${searchParams.get("language")??"hi"}`}>
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=Cricket&language=${searchParams.get("language")??"hi"}`}>
                  Cricket
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  role="Link"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item " to={`/?q=Entertainment&language=${searchParams.get("language")??"hi"}`}>
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to={`/?q=Economics&language=${searchParams.get("language")??"hi"}`}>
                      Economics
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to={`/?q=World&language=${searchParams.get("language")??"hi"}`}>
                      World
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to={`/?q=India&language=${searchParams.get("language")??"hi"}`}>
                      India
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to={`/?q=Jokes&language=${searchParams.get("language")??"hi"}`}>
                      Jokes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to={`/?q=Mahakumbh&language=${searchParams.get("language")??"hi"}`}>
                      Mahakumbh
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  role="Link"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={`/?q=${searchParams.get("q")??"All"}&language=hi`} className="dropdown-item ">
                      Hindi
                    </Link>
                  </li>
                  <li>
                    <Link to={`/?q=${searchParams.get("q")??"All"}&language=en`} className="dropdown-item ">
                      English
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => postSearch(e)}
            >
              <input
                className="form-control me-2"
                type="search"
                name="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                aria-label="Search"
              />
              <Link className="btn btn-outline-light" type="submit">
                Search
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
