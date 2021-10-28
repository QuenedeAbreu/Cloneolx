/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { PageContainer, PageTitle, ErrorMessage } from "../../components/MainComponents";
import { PageArea } from "./styled";
import useApi from "../../helpers/OlxApi";
import MaskedInput from "react-text-mask";
import { createNumberMask } from 'text-mask-addons';
// import { Link } from "react-router-dom";

function Page() {
  const api = useApi();
  const history = useHistory();

  const fileField = useRef();
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [priceNegotiable, setPriceNegotiable] = useState(false);
  const [description, setDescription] = useState("");

  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      const response = await api.getCategories();

      setCategories(response);
    }
    getCategories()
  }, []);


  async function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    setError("");
    let errors = [];
    if (!title.trim()) {
      errors.push("Sem tittulo");
    }

    if (!category.trim()) {
      errors.push("Sem categoria");
    }
    if (errors.length === 0) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("price", price);
      formData.append("priceneg", priceNegotiable);
      formData.append("desc", description);
      formData.append("cat", category);



      if (fileField.current.files.length > 0) {
        for (let i = 0; i < fileField.current.files.length; i++) {
          formData.append("img", fileField.current.files[i]);
        }
      }

      const response = await api.addAd(formData);
      if (!response.error) {
        history.push(`/ad/${response.id}`);
      } else {
        setError(response.error);
      }

    } else {
      setError(errors.join("\n"));
    }
    setDisabled(false);
  }


  const priceMask = createNumberMask({
    prefix: 'R$ ',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ','
  })

  return (
    <PageContainer>
      <PageTitle TextAlign={'center'} Margin={10 + 'px ' + 0}>Postar um anucio</PageTitle>
      <PageArea>
        {error &&

          <ErrorMessage>{error}</ErrorMessage>

        }
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Titulo</div>
            <div className="area--input">
              <input type="text"
                value={title}
                required
                onChange={e => setTitle(e.target.value)}
                disabled={disabled}

              />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Categoria</div>
            <div className="area--input">
              <select
                disabled={disabled}
                onChange={e => setCategory(e.target.value)}
                required
              >
                <option value=""></option>
                {categories && categories.map(category =>
                  <option key={category._id} value={category._id}>{category.name}</option>
                )}

              </select>
            </div>
          </label>

          <label className="area">
            <div className="area--title">Preco</div>
            <div className="area--input">
              <MaskedInput
                mask={priceMask}
                placeholder="R$ "
                disabled={disabled || priceNegotiable}
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Preco Negociavel</div>
            <div className="area--input">
              <input
                type="checkbox"
                disabled={disabled}
                onChange={e => setPriceNegotiable(!priceNegotiable)}
                checked={priceNegotiable}
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Descricao</div>
            <div className="area--input">
              <textarea
                disabled={disabled}
                value={description}
                onChange={e => setDescription(e.target.value)}
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

          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Adcionar Anuncio</button>
            </div>
          </label>


        </form>
      </PageArea>
    </PageContainer>
  );
}

export default Page;