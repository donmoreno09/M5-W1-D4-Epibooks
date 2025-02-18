import React from 'react';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

const App = () => {
  return (
    <div>
      
      <MyNav />
      
      
      <div className="container mt-4">
        <Welcome />
      </div>
      
      
      <div className="container mt-4">
        <AllTheBooks />
      </div>
      
      
      <MyFooter />
    </div>
  );
};

export default App;
