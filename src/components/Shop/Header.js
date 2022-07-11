import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Thunderstruck</h1>
        </a>
      </div>
      {/* <div className='container'> */}
        <div id='header' className='row'>
          <a href="#/">
            <h5>artists</h5>
          </a>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
        {/* </div>
        <div id='header' className='row'> */}
          <a href="#/">
            <h5>trips</h5>
          </a>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="#/">
            <h5>exhibitions</h5>
          </a>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="#/">
            <h5>merch</h5>
          </a>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="#/">
            <h5>about</h5>
          </a>
        </div>
      {/* </div> */}
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}