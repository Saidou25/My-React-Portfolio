import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./Resume.css";
import './Footer.css';
import './App.css';

function App() {
  return (
    <div>
    <div>
      <Header />
    </div>
    <div>
      <Footer />
    </div>
  </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
