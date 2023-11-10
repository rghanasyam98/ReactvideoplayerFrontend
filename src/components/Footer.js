


import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="container-fluid mb-0 mt-3 d-flex flex-column min-vh-50" style={{ backgroundColor: 'black', color: 'white', }}>
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-4">
          <div className="website" style={{ width: '400px' }}>
            <h4>
              <i className="fa-solid fa-video fa-beat text-warning me-4"></i>{''}
              Video player
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus bibendum tortor.
              Sed id semper mi. Proin auctor, nulla vel lacinia porta, nulla dolor suscipit ligula, a interdum velit augue id turpis.
            </p>
            <p>uheifjioni, cqiehciu, ichqieh</p>
          </div>
        </div>
        <div className="col-md-2">
  <div className="links">
    <h4>Links</h4>
    <div className="row">
      <div className="col">
        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
          Landing page
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>
          Home page
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>
          History page
        </Link>
      </div>
    </div>
  </div>
</div>

<div className="col-md-2">
  <div className="guides">
    <h4>Guides</h4>
    <div className="row">
      <div className="col">
        <Link to={'https://react.dev/'} style={{ textDecoration: 'none', color: 'white' }}>
          React
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: 'none', color: 'white' }}>
          React Bootstrap
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>
          Bootswatch
        </Link>
      </div>
    </div>
  </div>
</div>

        <div className="col-md-4">
          <div className="contact">
            <h4 className="mb-3">Contact us</h4>
            <div className="d-flex">
              <input type="text" className="form-control" placeholder="Enter email" />
              <button className="btn btn-warning text-white ms-2">Subscribe</button>
            </div>
            <div className="icons d-flex justify-content-evenly mt-2">
              <Link to={''} style={{ textDecoration: 'none', color: 'white' }}>
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link to={''} style={{ textDecoration: 'none', color: 'white' }}>
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link to={''} style={{ textDecoration: 'none', color: 'white' }}>
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link to={''} style={{ textDecoration: 'none', color: 'white' }}>
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p>Copyright</p>
        </div>
      </div>
    </div>
  );
}

