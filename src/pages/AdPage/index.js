import React, { useState } from "react";
import { PageContainer } from "../../components/MainComponents";
import { PageArea, FakeAd } from "./styled";
import useApi from "../../helpers/OlxApi";
import { useParams } from 'react-router-dom'

// import { Link } from "react-router-dom";

function Page() {
  const api = useApi();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [adInfo, setAdInfo] = useState([]);

  return (
    <PageContainer>
      <PageArea>
        <div className="leftSide">
          <div className="box">
            <div className="adImage">
              {loading && <FakeAd height={300} />}
            </div>

            <div className="adInfos">

              <div className="adName">
                {loading && <FakeAd height={20} />}
              </div>

              <div className="adDescription">
                {loading && <FakeAd height={100} />}
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