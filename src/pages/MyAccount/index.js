
import React, { useState, useEffect, useRef } from "react";
import { PageContainer, PageTitle, ErrorMessage } from "../../components/MainComponents";
import { PageArea, ModalAll } from "./styled";
import AddItem from "../../components/partials/AddItemModal";
import useApi from "../../helpers/OlxApi";
import Modal from '../../components/partials/ModalItem';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slide from "react-slick";
import MaskedInput from "react-text-mask";
import { createNumberMask } from 'text-mask-addons';
// import { useHistory } from "react-router";




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
  const fileField = useRef();
  // const history = useHistory();

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

  //Modal Edit post
  // Categorias Select Box
  const [categories, setCategories] = useState([]);

  const [visibleModal, setVisibleModal] = useState(false);
  const [adStatusModal, setAdStatusModal] = useState(false);
  const [adTitleModal, setAdTitleModal] = useState("");

  const [categoryModal, setCategoryModal] = useState("");
  const [priceModal, setPriceModal] = useState("");
  const [priceNegotiableModal, setPriceNegotiableModal] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState("");
  const [imagesModal, setImagesModal] = useState([]);
  const [getIdAddModal, setGetIdAddModal] = useState("");

  //Pegar as categorias 
  useEffect(() => {
    const getCategories = async () => {
      const response = await api.getCategories();

      setCategories(response);
    }
    getCategories()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
  //   console.log(user);
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


  const handleSubmitModal = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError("");
    let errors = [];
    if (!adTitleModal.trim()) {
      errors.push("Sem tittulo");
    }

    if (!categoryModal.trim()) {
      errors.push("Sem categoria");
    }

    if (errors.length === 0) {
      const formData = new FormData();
      formData.append("status", adStatusModal);
      formData.append("title", adTitleModal);
      formData.append("category", categoryModal);
      formData.append("price", priceModal);
      formData.append("priceNegotiable", priceNegotiableModal);
      formData.append("description", descriptionModal);
      formData.append("images", imagesModal);


      if (fileField.current.files.length > 0) {
        for (let i = 0; i < fileField.current.files.length; i++) {
          formData.append("img", fileField.current.files[i]);
        }
      }

      const response = await api.updateAd(formData, getIdAddModal);
      console.log(response);

      if (!response.error) {

        window.location.href = "/my-account";
      } else {
        setError(response.error);
      }

    } else {
      setError(errors.join("\n"));
    }
    setDisabled(false);

    setVisibleModal(false);
    setDisabled(false);
  }

  // function handleClick(e) {
  //   e.preventDefault();
  //   setVisibleModal(!visibleModal);
  // }

  const priceMask = createNumberMask({
    prefix: 'R$ ',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ','
  })

  function openModal(props) {
    categories.map((item) => {
      if (item.slug === props.category) {
        setCategoryModal(item._id);
      }
      return "";
    }
    )

    setAdStatusModal(props.status);
    setAdTitleModal(props.title);
    setPriceNegotiableModal(props.priceNegotiable);
    setPriceModal(props.price);
    setDescriptionModal(props.description);
    setImagesModal(props.images);
    setGetIdAddModal(props.id);

    setVisibleModal(!visibleModal);
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
                  <div key={index} onClick={() => openModal(ads)}>
                    <AddItem key={index} data={ads} />
                  </div>

                ))}
              </Slide>
            </div>
          }
        </div>
      </PageArea>


      {visibleModal &&
        <Modal title={adTitleModal} visibleModal={visibleModal} setVisibleModal={setVisibleModal}>
          <ModalAll>
            <form onSubmit={handleSubmitModal} >
              <div className="modalContent">

                <div className="modalLeft">
                  <label className="area">
                    <div className="area--title">Titulo : </div>
                    <div className="area--input">

                      <input type="text"
                        value={adTitleModal || ""}
                        required
                        onChange={e => setAdTitleModal(e.target.value)}
                        disabled={disabled}
                      />
                    </div>
                  </label>
                  <label className="area area--checkbox">
                    <div className="area--title">Status (Ativo / Inativo): </div>
                    <div className="area--input">
                      <input type="checkbox"
                        checked={adStatusModal}
                        onChange={() => setAdStatusModal(!adStatusModal)}
                        disabled={disabled} />
                    </div>
                  </label>




                  <label className="area">
                    <div className="area--title">Categoria :</div>
                    <div className="area--input">
                      <select
                        disabled={disabled}
                        onChange={e => setCategoryModal(e.target.value)}
                        value={categoryModal}
                        required
                      >
                        <option value=""></option>
                        {categories && categories.map(category =>
                          <option key={category._id} value={category._id}>{category.name}</option>
                        )}

                      </select>
                    </div>
                  </label>
                  <label className="area area--checkbox">
                    <div className="area--title">Preco Negociavel</div>
                    <div className="area--input">
                      <input
                        type="checkbox"
                        disabled={disabled}
                        onChange={e => setPriceNegotiableModal(!priceNegotiableModal)}
                        checked={priceNegotiableModal}
                      />
                    </div>
                  </label>
                </div>


                <div className="modalRight">
                  <label className="area">
                    <div className="area--title">Preco :</div>
                    <div className="area--input">
                      <MaskedInput
                        mask={priceMask}
                        placeholder="R$ "
                        disabled={disabled || priceNegotiableModal}
                        value={priceModal}
                        onChange={e => setPriceModal(e.target.value)}
                      />
                    </div>
                  </label>


                  <label className="area">
                    <div className="area--title">Descricao</div>
                    <div className="area--input">
                      <textarea
                        disabled={disabled}
                        value={descriptionModal}
                        onChange={e => setDescriptionModal(e.target.value)}
                      >
                      </textarea>
                    </div>
                  </label>
                  <label className="area">
                    <div className="area--title">Imagens (1 ou mais)</div>
                    <div className="area--input">
                      <input
                        type="file"
                        disabled={disabled}
                        ref={fileField}
                        multiple
                      />
                    </div>
                  </label>
                </div>
              </div>


              <div className="area--button">
                <button disabled={disabled}>Atualizar</button>
              </div>


            </form>
          </ModalAll>
        </Modal>
      }
    </PageContainer>
  )
}
export default Page;