import React from "react";
import Header from "./Header";
import Mission from "./Mission";
import Image from "./Image";
import Footer from "./Footer";
import ExampleComponent from "./components/homepage/ExampleComponent";

function App() {
  return (
    <div className="page">
      <div className="App">
        <div className="ellipse"></div>
        <h1 className="heading">About Project Interactivity</h1>
        <Mission />
        <Image />
        <Footer />
      </div>
    </div>
  );
}

export default App;
