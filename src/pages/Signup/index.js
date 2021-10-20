import React, { useState, useEffect } from "react";
import { PageContainer, PageTitle, ErrorMessage } from "../../components/MainComponents";
import { PageArea } from "./styled";
import useApi from "../../helpers/OlxApi";
import { doLogin } from "../../helpers/AuthHerdler";
// import { Link } from "react-router-dom";

function Page() {
  const api = useApi();
  const [name, setName] = useState("");
  const [stateLocation, setStateLocation] = useState("");
  const [stateList, setStateList] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);


  useEffect(() => {
    const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    }
    getStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  async function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    if (password !== confirmePassword) {
      setError("Senhas não conferem");
      setDisabled(false);
      return;
    }

    const json = await api.register(name, email, password, stateLocation);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token);
      window.location.href = "/";
    }
    setDisabled(false);
  }

  return (
    <PageContainer>
      <PageTitle TextAlign={'center'} Margin={10 + 'px ' + 0}>Cadastro</PageTitle>
      <PageArea>
        {error &&

          <ErrorMessage>{error}</ErrorMessage>

        }
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Nome Completo</div>
            <div className="area--input">
              <input type="text"
                value={name}
                required
                onChange={e => setName(e.target.value)}
                disabled={disabled} />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Estado</div>
            <div className="area--input">
              <select value={stateLocation} onChange={e => setStateLocation(e.target.value)} required>
                <option></option>
                {stateList.map((state, k) =>
                  <option key={k} value={state._id}>{state.name}</option>
                )}
              </select>
            </div>
          </label>

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

          <label className="area">
            <div className="area--title">Confirmar Senha</div>
            <div className="area--input">
              <input type="password"
                value={confirmePassword}
                required
                onChange={e => setConfirmePassword(e.target.value)}
                disabled={disabled} />
            </div>
          </label>



          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Fazer Cadastro</button>
            </div>
          </label>


        </form>
      </PageArea>
    </PageContainer>
  );
}

export default Page;