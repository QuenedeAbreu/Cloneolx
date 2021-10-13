/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { PageContainer } from "../../components/MainComponents";
import { PageArea } from "./styled";
import { useLocation, useHistory } from "react-router-dom";
import useApi from "../../helpers/OlxApi";


function Page() {
  const api = useApi();
  const history = useHistory();
  // pega os valores da URL
  const useQueryString = () => {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQueryString();
  //valor da pesquisa
  const [q, setQ] = useState(query.get("q") != null ? query.get("q") : "");
  //valor da categoria
  const [cat, setCat] = useState(query.get("cat") != null ? query.get("cat") : "");
  //valor do estado
  const [state, setState] = useState(query.get("state") != null ? query.get("state") : "");
  // end pega os valores da URL

  //Montando a url para pesquisa
  useEffect(() => {
    let queryString = []
    if (q) {
      queryString.push(`q=${q}`)
    }
    if (cat) {
      queryString.push(`cat=${cat}`)
    }
    if (state) {
      queryString.push(`state=${state}`)
    }


    history.replace({
      search: `?${queryString.join('&')}`
    })
  }, [q, cat, state]);



  const [stateList, setStateList] = useState([])
  const [categories, setCategories] = useState([])
  const [adList, setAdList] = useState([])


  useEffect(() => {
    const getStates = async () => {
      const states = await api.getStates();
      setStateList(states)

    }
    getStates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const getCategories = async () => {
      const categories = await api.getCategories();
      setCategories(categories)

    }
    getCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getRecentAds = async () => {
      const Ads = await api.getAds({
        sort: 'desc',
        limit: 8
      });
      setAdList(Ads.ads)

    }
    getRecentAds()

  }, []);

  return (
    <PageContainer>
      <PageArea>
        <div className="leftSide">
          <form method="GET">
            <input type="text" name="q" placeholder="O que você procura?"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />

            <div className="filterName">Estado: </div>

            <select name="state" value={state}
              onChange={(e) => setState(e.target.value)}>

              <option value=""></option>

              {stateList.map((state, index) => (
                <option key={index} value={state.id}>{state.name}</option>
              ))}

            </select>

            <div className="filterName">Categoria: </div>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className={cat === category.slug ? 'categoryItem active' : 'categoryItem'}
                  onClick={() => setCat(category.slug)}
                >
                  < img src={category.img} alt="" />
                  <span>{category.name}</span>
                </li>
              ))}

            </ul>
          </form>
        </div>
        <div className="rightSide">
          ...
        </div>

      </PageArea>
    </PageContainer>
  );
}

export default Page;