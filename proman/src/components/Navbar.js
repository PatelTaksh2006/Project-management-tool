import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
<div className="container-fluid">
<a className="navbar-brand fw-bold" href="/">PM Tool</a>

text
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="topNavbar">
      <form className="d-flex ms-auto me-3">
        <input className="form-control form-control-sm me-2" type="search" placeholder="Search projects, tasks..." />
      </form>
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="userMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-person-circle me-1"></i> Manager
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
            <li><a className="dropdown-item" href="/settings">Settings</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
}

