import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { userDataContext } from "./components/Context/Context"
function App() {
  const userData = {
    name: "Ali",
    age: 24,
    contact: 901234567,
  };

  console.log("Salom dunyo");
  return (
    <div>
      <div>
        <userDataContext.Provider value={userData}>
          <Navbar />
          <Main />
          <Footer />
        </userDataContext.Provider>
      </div>
    </div>
  );
}

export default App;
