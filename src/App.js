import React from 'react';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <MyNav />
      
      {/* Welcome Section */}
      <div className="container mt-4">
        <Welcome />
      </div>
      
      {/* Books Grid */}
      <div className="container mt-4">
        <AllTheBooks />
      </div>
      
      {/* Footer */}
      <MyFooter />
    </div>
  );
};

export default App;
