import React from "react";
import {Link} from "react-router-dom";
function Page() {
  return (
    <div>
      <Link to="/sobre">Sobre</Link>
      <a href="/sobre">Sobre</a>
      <h1>Home</h1>
    </div>
  );
} 

export default Page;