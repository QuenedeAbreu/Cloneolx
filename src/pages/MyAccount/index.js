
import React, { useState, useEffect } from "react";
import { PageContainer, PageTitle, ErrorMessage } from "../../components/MainComponents";
import { PageArea } from "./styled";
import AddItem from "../../components/partials/AddItem";
import useApi from "../../helpers/OlxApi";
// import { Slide } from 'react-slideshow-image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "react-slick";




function Page(props) {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };




  const api = useApi();

  const [user, setUser] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [adsList, setAdsList] = useState([]);


  // Formulario
  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [state, setState] = useState([]);
  const [stateUser, setStateUser] = useState("");
  const [stateUserEn, setStateUserEn] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Pega informações do usuário
  useEffect(() => {
    const getUsesr = async () => {
      const response = await api.getUser();
      setAdsList(response.ads);
      setUser(response);
      setNameUser(response.name)
      setEmailUser(response.email)
      // setStateUser(response.state)

    }
    getUsesr()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  // Pega informações do estado
  useEffect(() => {
    const getState = async () => {
      const response = await api.getStates();
      setState(response);
    }
    getState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line array-callback-return
      state.map(function (item) {
        if (item.name === user.state) {
          setStateUser(item._id);

        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  // useEffect(async () => {
  //   console.log(adsList);

  //   // console.log(state);
  //   // console.log(stateUser);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])



  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);


    // eslint-disable-next-line array-callback-return
    state.map(function (item) {
      if (item._id === stateUser) {
        setStateUserEn(item.name);
      }
    })

    const response = await api.updateUser(nameUser, emailUser, stateUserEn, password);
    if (response.error) {
      setError(response.error)
    } else {
      window.location.href = "/my-account";
    }
    setDisabled(false);
    // console.log(response);
  }

  return (
    <PageContainer>
      <PageTitle TextAlign={'center'} Margin={10 + 'px ' + 0}>Minha Conta</PageTitle>
      <PageArea>
        {error &&

          <ErrorMessage>{error}</ErrorMessage>

        }

        <div className="pageTop">
          <div className="pageTopLeft">
            <div className="imgProfile">
              <img src="https://i1.sndcdn.com/avatars-000205498235-o6x5yu-t500x500.jpg" alt="profile" />
            </div>
            <div className="infoProfile">
              <h1>{user &&
                user.name
              }</h1>
              <p>{user &&
                user.email
              }</p>
            </div>
          </div>

          <div className="pageTopRight">
            <form onSubmit={handleSubmit} className="formRight">

              <label className="area">
                <div className="area--title">Nome :</div>
                <div className="area--input">

                  <input type="text"
                    value={nameUser || ""}
                    required
                    onChange={e => setNameUser(e.target.value)}
                    disabled={disabled}
                  />
                </div>
              </label>


              <label className="area areaSelectBox">
                <div className="area--title">Estado :</div>
                <div className="area--input">

                  <select disabled={disabled} value={stateUser} onChange={e => setStateUser(e.target.value)} required>
                    <option></option>
                    {state.map((state, k) =>
                      <option key={k} value={state._id}>{state.name}</option>
                    )}
                  </select>

                </div>
              </label>

              <label className="area">
                <div className="area--title">Email :</div>
                <div className="area--input">

                  <input type="email"
                    value={emailUser || ""}
                    required
                    onChange={e => setEmailUser(e.target.value)}
                    disabled={disabled}
                  />
                </div>
              </label>


              <label className="area">
                <div className="area--title">Nova senha :</div>
                <div className="area--input">

                  <input type="password"
                    value={password || ""}
                    // required
                    onChange={e => setPassword(e.target.value)}
                    disabled={disabled}
                  />
                  <span>Caso não informar, a senha continuará a mesma.</span>
                </div>
              </label>


              <label className="area alignerButton">
                <div className="area--title"></div>
                <div className="area--input">
                  <button disabled={disabled}>Atualizar</button>
                </div>
              </label>
            </form>
          </div>
        </div>

        <PageTitle TextAlign={'center'} Margin={"20px 0"}>Meus anúncios</PageTitle>
        <div className="pageBottom">
          {adsList &&
            <div className="adsList">
              <Slide {...settings}>
                {adsList.map((ads, index) => (
                  // <div key={index} className="each-slide">
                  <AddItem key={index} data={ads} />
                  // </div>
                ))}
              </Slide>
            </div>
          }
        </div>

      </PageArea>
    </PageContainer>
  )
}
export default Page;