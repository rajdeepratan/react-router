import React, { Component } from 'react';
// import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <p>Hello World</p>
        <h1>This is Home Page</h1>
        <div style={{background: 'red'}}>
          <p>Welcome to Home Page</p>
        </div>
      </div>
    );
  }
}

// const Home = () => (
//   <div>
//     <h3>
//       Home
//     </h3>
//   </div>
// );

export default Home;
