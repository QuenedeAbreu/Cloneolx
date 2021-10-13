/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { PageContainer } from "../../components/MainComponents";
import { PageArea, SeachArea, FakeDiv } from "./styled";
import AddItem from "../../components/partials/AddItem";
import { Link } from "react-router-dom";
import useApi from "../../helpers/OlxApi";


function Page() {
  const api = useApi();
  const [loading, setLoaging] = useState(true);
  const [stateList, setStateList] = useState([])
  const [categories, setCategories] = useState([])
  const [adList, setAdList] = useState([])


  useEffect(() => {
    const getStates = async () => {
      const states = await api.getStates();
      setStateList(states)
      setLoaging(false)
    }
    getStates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const getCategories = async () => {
      const categories = await api.getCategories();
      setCategories(categories)
      setLoaging(false)
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
      setLoaging(false)
    }
    getRecentAds()

  }, []);

  return (
    <div>
      <SeachArea>
        <PageContainer>
          <div className="searchBox">
            <form action="/ads" method="GET">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">
                <option value=""></option>
                {loading &&
                  <option key={0} value="">Carregando...</option>
                }

                {stateList.map((state, key) =>
                  <option key={key} value={state.id}>{state.name}</option>
                )}

              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          {loading &&
            <FakeDiv height={100} />
          }
          {!loading &&

            <div className="categoryList">

              {categories.map((category, key) =>
                <Link key={key} to={`/ads?cat=${category.slug}`} className="categoryItem">
                  <img src={category.img} alt={category.name} />
                  <span>{category.name}</span>
                </Link>
              )}

            </div>
          }
        </PageContainer>
      </SeachArea>

      <PageContainer>
        <PageArea>
          <h2>Anúncios Recentes</h2>
          {loading &&
            <FakeDiv height={300} />
          }
          <div className="list">
            {adList.map((ad, key) =>
              <AddItem key={key} data={ad} />
            )}
          </div>
          <Link to="/ads" className="seeAllLink">Ver Todos</Link>

          <hr />
          <p>Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt repellat,
            esse inventore expedita totam aut reiciendis
            voluptatum nisi ex dolor voluptatibus, exercitationem
            sapiente impedit cum ipsum eius molestias. Officiis,
            eveniet?</p>
        </PageArea>
      </PageContainer>

    </div>
  );
}

export default Page;