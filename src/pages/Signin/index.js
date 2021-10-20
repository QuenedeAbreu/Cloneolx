import React, { useState } from "react";
import { PageContainer, PageTitle, ErrorMessage } from "../../components/MainComponents";
import { PageArea } from "./styled";
import useApi from "../../helpers/OlxApi";
import { doLogin } from "../../helpers/AuthHerdler";
// import { Link } from "react-router-dom";

function Page() {
  const api = useApi();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    const json = await api.login(email, password);
    console.log(json);
    if (json.error) {
      setError(json.error);

    } else {
      doLogin(json.token, rememberPassword);
      window.location.href = "/";
    }
    setDisabled(false);
  }

  return (
    <PageContainer>
      <PageTitle TextAlign={'center'} Margin={10 + 'px ' + 0}>Login</PageTitle>
      <PageArea>
        {error &&

          <ErrorMessage>{error}</ErrorMessage>

        }
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">E-mail</div>
            <div className="area--input">
              <input type="email"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
                disabled={disabled} />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input type="password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
                disabled={disabled} />
            </div>
          </label>

          <label className="area area--checkbox">
            <div className="area--title">Lembrar Senha</div>
            <div className="area--input">
              <input type="checkbox"
                checked={rememberPassword}
                onChange={() => setRememberPassword(!rememberPassword)}
                disabled={disabled} />
            </div>
          </label>

          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Fazer Login</button>
            </div>
          </label>


        </form>
      </PageArea>
    </PageContainer>
  );
}

export default Page;