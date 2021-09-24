import React, { useState, useEffect } from "react";
import { Slide } from 'react-slideshow-image';
import { PageContainer } from "../../components/MainComponents";
import { PageArea, FakeAd } from "./styled";
import useApi from "../../helpers/OlxApi";
import { useParams } from 'react-router-dom'

// import { Link } from "react-router-dom";

function Page() {
  const api = useApi();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [adInfos, setAdInfos] = useState({});

  useEffect(() => {
    const getAdInfo = async (id) => {
      const response = await api.getAd(id, true);
      setAdInfos(response);

      setLoading(false);
    }
    getAdInfo(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function formatDate(date) {
    let cDate = new Date(date);
    let months = ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    let cDay = cDate.getDate();
    let cMonth = months[cDate.getMonth()];
    let cYear = cDate.getFullYear();
    return `${cDay} de ${cMonth} de ${cYear}`;
  };

  return (
    <PageContainer>
      <PageArea>
        <div className="leftSide">
          <div className="box">
            <div className="adImage">

              {loading && <FakeAd height={300} />}
              {adInfos.images &&
                <Slide>
                  {adInfos.images.map((image, index) =>
                    <div key={index} className="each-slide">
                      <img src={image} alt="slide" />
                    </div>
                  )}
                </Slide>
              }
            </div>

            <div className="adInfos">

              <div className="adName">
                {loading && <FakeAd height={20} />}
                {adInfos.title && <h2>{adInfos.title}</h2>}
                {adInfos.dateCreated &&
                  <small>Criado em: {formatDate(adInfos.dateCreated)}</small>}
              </div>

              <div className="adDescription">
                {loading && <FakeAd height={100} />}
                {adInfos.description}
                <hr />
                {adInfos.views && <small>Visualizações: {adInfos.views}</small>}
              </div>

            </div>

          </div>

        </div>

        <div className="rightSide">
          <div className="box box--padding">
            {loading && <FakeAd height={20} />}
          </div>
          <div className="box box--padding">
            {loading && <FakeAd height={50} />}
          </div>
        </div>

      </PageArea>
    </PageContainer>
  );
}

export default Page;