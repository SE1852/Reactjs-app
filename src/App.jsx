import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ReactDOM from 'react-dom';
import About from "./component/About";

class App extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Navbar/>

            <About />
            <Footer />


         </div>
      );
   }
}

export default App;
