import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound';
// import Home from './pages/Home';




function App() {
  


  return (
    <div className="wrapper">
    <Header />
    <div className='content'>
   {/* <Home /> */}
   <NotFound />
    </div>
    </div>
  );
}

export default App;
