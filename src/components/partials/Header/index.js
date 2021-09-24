import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "./styled";
import { isLogged, doLogout } from '../../../helpers/AuthHerdler'

function Header() {
  let logged = isLogged();

  function handleLogout() {
    doLogout();
    window.location.href = "/";
  }
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">O</span>
            <span className="logo-2">L</span>
            <span className="logo-3">X</span>
          </Link>
        </div>

        <nav>
          <ul>
            {logged &&
              <div>
                <li> <Link to="/post-an-ad" className="button">Poste um anúncio</Link></li>
                <li> <Link to="/my-account" >Minha Conta</Link></li>
                <li> <button onClick={handleLogout}>Sair</button></li>
              </div>
            }

            {!logged &&
              <div>
                <li> <Link to="/signin" className="button">Poste um anúncio</Link></li>
                <li> <Link to="/signin">Login</Link></li>
                <li> <Link to="/signup">Cadastrar</Link></li>
              </div >
            }
          </ul>
        </nav>
      </div>
    </HeaderArea>
  )
}

export default Header;