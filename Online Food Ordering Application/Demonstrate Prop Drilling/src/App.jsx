import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";


const user = {
  name: "Rahul Sharma",
  email: "rahul@gmail.com",
  location: "Chandigarh",
};

function App() {
  return (
    <div>
      <Navbar />
      <Home user={user} />
    </div>
  );
}

export default App;