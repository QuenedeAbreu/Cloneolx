import React from "react";
import { Link } from "react-router-dom";
function Page() {
  return (
    <div>
      <h1>Página não encontrada - 404</h1>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}

export default Page;